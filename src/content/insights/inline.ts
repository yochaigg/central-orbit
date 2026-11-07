export type Inline =
  | { t: "text"; v: string }
  | { t: "bold"; v: string }
  | { t: "link"; label: string; href: string }
  | { t: "cite"; n: number };

const TOKEN = /\[([^\]\[]+)\]\(([^)\s]+)\)|\[(\d{1,2})\]|\*\*([^*]+)\*\*/g;

export function parseInline(input: string): Inline[] {
  const out: Inline[] = [];
  let last = 0;
  for (const m of input.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push({ t: "text", v: input.slice(last, at) });
    if (m[1] !== undefined && m[2] !== undefined) {
      out.push({ t: "link", label: m[1], href: m[2] });
    } else if (m[3] !== undefined) {
      out.push({ t: "cite", n: Number(m[3]) });
    } else if (m[4] !== undefined) {
      out.push({ t: "bold", v: m[4] });
    }
    last = at + m[0].length;
  }
  if (last < input.length) out.push({ t: "text", v: input.slice(last) });
  return out;
}

export function plainText(input: string): string {
  return parseInline(input)
    .map((t) => (t.t === "link" ? t.label : t.t === "cite" ? "" : t.t === "text" || t.t === "bold" ? t.v : ""))
    .join("");
}
