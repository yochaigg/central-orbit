#!/usr/bin/env python3
"""Skill protector backed by NVIDIA SkillSpector (https://github.com/NVIDIA/SkillSpector).

Modes (first argument):
  session   SessionStart hook: scan every existing on-disk skill and report.
  pretool   PreToolUse hook on Skill: block a skill unless its current contents
            have passed a SkillSpector scan (re-scans on any change).
  posttool  PostToolUse hook on Write/Edit: scan a skill that was just created
            or modified and flag it to Claude if it fails.

Results are cached in ~/.claude/skillspector/ledger.json, keyed by skill path
and a SHA-256 of the skill directory's contents.
"""
import hashlib
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

HOME = Path.home()
PROJECT = Path(os.environ.get("CLAUDE_PROJECT_DIR") or os.getcwd())
LEDGER = HOME / ".claude" / "skillspector" / "ledger.json"
SKILL_ROOTS = [PROJECT / ".claude" / "skills", HOME / ".claude" / "skills"]
PLUGIN_ROOT = HOME / ".claude" / "plugins"
INSTALL_HINT = (
    "uv tool install --python 3.12 "
    "'skillspector[mcp] @ git+https://github.com/NVIDIA/skillspector.git'"
)


def find_binary():
    local = HOME / ".local" / "bin" / "skillspector"
    return shutil.which("skillspector") or (str(local) if local.exists() else None)


def all_skill_dirs():
    dirs = [p.parent for root in SKILL_ROOTS if root.is_dir() for p in root.glob("**/SKILL.md")]
    if PLUGIN_ROOT.is_dir():
        dirs += [p.parent for p in PLUGIN_ROOT.glob("**/skills/*/SKILL.md")]
    return sorted({d.resolve() for d in dirs})


def resolve_skill(name):
    """Map a Skill tool name (e.g. "foo" or "plugin:foo") to its directory."""
    short = name.split(":")[-1]
    for d in all_skill_dirs():
        if d.name == short:
            return d
    return None  # built-in skill with no on-disk directory


def skill_dir_for_file(path):
    p = Path(path).resolve()
    for parent in [p.parent, *p.parent.parents]:
        if (parent / "SKILL.md").exists():
            return parent
        if parent.name == "skills":
            break
    return None


def hash_dir(d):
    h = hashlib.sha256()
    for f in sorted(p for p in d.rglob("*") if p.is_file()):
        h.update(str(f.relative_to(d)).encode())
        h.update(f.read_bytes())
    return h.hexdigest()


def load_ledger():
    try:
        return json.loads(LEDGER.read_text())
    except Exception:
        return {}


def save_ledger(ledger):
    LEDGER.parent.mkdir(parents=True, exist_ok=True)
    LEDGER.write_text(json.dumps(ledger, indent=2))


def check(d, ledger):
    """Return (verdict, detail); verdict is PASS, FAIL, ERROR or MISSING."""
    digest = hash_dir(d)
    entry = ledger.get(str(d))
    if entry and entry.get("hash") == digest and entry.get("verdict") in ("PASS", "FAIL"):
        return entry["verdict"], entry.get("detail", "cached")
    binary = find_binary()
    if not binary:
        return "MISSING", f"SkillSpector is not installed. Install with: {INSTALL_HINT}"
    try:
        r = subprocess.run(
            [binary, "scan", str(d), "--no-llm"],
            capture_output=True, text=True, timeout=110,
        )
        code, out = r.returncode, (r.stdout + r.stderr).strip()
    except subprocess.TimeoutExpired:
        code, out = 2, "scan timed out"
    # Exit codes: 0 = risk <= 50 and no gates fired, 1 = risky, 2 = error.
    verdict = {0: "PASS", 1: "FAIL"}.get(code, "ERROR")
    detail = out[-3000:]
    if verdict != "ERROR":
        ledger[str(d)] = {"hash": digest, "verdict": verdict, "detail": detail}
    return verdict, detail


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else ""
    try:
        event = json.load(sys.stdin)
    except Exception:
        event = {}
    ledger = load_ledger()

    if mode == "session":
        dirs = all_skill_dirs()
        if not dirs:
            return
        results = [(d, check(d, ledger)[0]) for d in dirs]
        save_ledger(ledger)
        bad = [(d, v) for d, v in results if v != "PASS"]
        if any(v == "MISSING" for _, v in bad):
            print(f"[SkillSpector] Not installed; {len(dirs)} skill(s) unscanned and will be "
                  f"blocked. Install with: {INSTALL_HINT}")
        elif bad:
            print("[SkillSpector] Skills that did not pass the security scan (blocked):\n" +
                  "\n".join(f"  - {d} ({v})" for d, v in bad))
        else:
            print(f"[SkillSpector] All {len(dirs)} skill(s) passed the security scan.")

    elif mode == "pretool":
        name = (event.get("tool_input") or {}).get("skill", "")
        d = resolve_skill(name)
        if d is None:
            return
        verdict, detail = check(d, ledger)
        save_ledger(ledger)
        if verdict != "PASS":
            print(json.dumps({"hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason":
                    f"SkillSpector blocked skill '{name}' ({d}): {verdict}.\n{detail}",
            }}))

    elif mode == "posttool":
        path = (event.get("tool_input") or {}).get("file_path", "")
        d = skill_dir_for_file(path) if path else None
        if d is None:
            return
        verdict, detail = check(d, ledger)
        save_ledger(ledger)
        if verdict != "PASS":
            print(json.dumps({
                "decision": "block",
                "reason": f"SkillSpector flagged skill {d}: {verdict}. It will be blocked "
                          f"from running until it passes.\n{detail}",
            }))


if __name__ == "__main__":
    main()
