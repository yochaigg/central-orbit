import { AUTHORS } from "./authors";
import { CLUSTERS, KNOWN_ROUTES, SERVICE_LINK_ROUTES } from "./config";
import { parseInline, plainText } from "./inline";
import type { Article, Block } from "./types";

// These checks reject structurally incomplete articles. They cannot establish
// that an article is accurate, useful or well written. A person must review that.

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const MIN_WORDS = 600;
const FILLER = [
  "in today's fast-paced",
  "ever-evolving",
  "game-changer",
  "game changer",
  "delve",
  "unlock the potential",
  "in the realm of",
  "it is important to note",
];

function validDate(s: string): boolean {
  if (!DATE_RE.test(s)) return false;
  const d = new Date(`${s}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

function blockStrings(b: Block): string[] {
  switch (b.type) {
    case "h2":
    case "h3":
    case "p":
      return [b.text];
    case "ul":
    case "ol":
      return b.items;
    case "callout":
      return [b.text];
    case "table":
      return b.rows.flat();
  }
}

export interface Result {
  errors: string[];
  warnings: string[];
}

export function validateArticle(
  a: Article,
  published: ReadonlySet<string>,
  today: string,
): Result {
  const errors: string[] = [];
  const warnings: string[] = [];
  const e = (m: string) => errors.push(`[${a.slug}] ${m}`);
  const w = (m: string) => warnings.push(`[${a.slug}] ${m}`);

  if (!SLUG_RE.test(a.slug)) e("slug must be lowercase kebab-case");
  if (!(a.cluster in CLUSTERS)) e(`unknown cluster "${a.cluster}"`);
  if (!(a.author in AUTHORS)) e(`unknown author "${a.author}"`);

  const metaTitle = a.seoTitle ?? a.title;
  if (a.title.length < 20 || a.title.length > 120) e("title must be 20-120 characters");
  if (metaTitle.length > 55) e("seoTitle (or title) must be 55 characters or fewer for the search title");
  if (a.description.length < 70 || a.description.length > 165) e("description must be 70-165 characters");

  const q = a.businessQuestion.trim();
  if (q.length < 30 || q.length > 200 || !q.endsWith("?")) {
    e("businessQuestion must be a question of 30-200 characters ending in ?");
  }
  if (a.shortAnswer.trim().length < 40 || a.shortAnswer.length > 450) {
    e("shortAnswer must be 40-450 characters");
  }

  if (!validDate(a.datePublished)) e("datePublished must be a real YYYY-MM-DD date");
  if (!validDate(a.dateModified)) e("dateModified must be a real YYYY-MM-DD date");
  if (validDate(a.datePublished) && validDate(a.dateModified)) {
    if (a.dateModified < a.datePublished) e("dateModified is earlier than datePublished");
    if (a.dateModified > today || a.datePublished > today) e("dates must not be in the future");
  }

  // Body
  const strings = a.body.flatMap(blockStrings);
  const h2s = a.body.filter((b) => b.type === "h2").length;
  if (h2s < 2) e("body needs at least two h2 sections");
  const words = strings.map(plainText).join(" ").split(/\s+/).filter(Boolean).length;
  if (words < MIN_WORDS) e(`body has ${words} words; minimum ${MIN_WORDS}`);

  // Sources and citations
  if (a.sources.length < 3) e("at least three sources are required");
  if (!a.sources.some((s) => s.kind === "primary")) e("at least one primary source is required");
  const urls = new Set<string>();
  a.sources.forEach((s, i) => {
    const id = `source ${i + 1}`;
    if (s.title.trim().length < 5) e(`${id}: title missing`);
    if (!s.publisher.trim()) e(`${id}: publisher missing`);
    try {
      const u = new URL(s.url);
      if (u.protocol !== "https:") e(`${id}: url must be https`);
    } catch {
      e(`${id}: url is not valid`);
    }
    if (urls.has(s.url)) e(`${id}: duplicate url`);
    urls.add(s.url);
    if (!validDate(s.accessed) || s.accessed > today) e(`${id}: accessed must be a real, non-future date`);
  });

  const cited = new Set<number>();
  for (const s of strings) {
    for (const tok of parseInline(s)) {
      if (tok.t === "cite") {
        cited.add(tok.n);
        if (tok.n < 1 || tok.n > a.sources.length) e(`citation [${tok.n}] has no matching source`);
      }
      if (tok.t === "link") {
        const href = tok.href;
        if (href.startsWith("/")) {
          const path = href.split(/[#?]/)[0];
          const m = path.match(/^\/insights\/([^/]+)$/);
          if (m) {
            if (!published.has(m[1])) e(`link to unpublished article: ${href}`);
          } else if (!KNOWN_ROUTES.has(path)) {
            e(`internal link to unknown route: ${href}`);
          }
        } else if (!href.startsWith("https://")) {
          e(`links must be internal paths or https URLs: ${href}`);
        }
      }
    }
  }
  a.sources.forEach((_, i) => {
    if (!cited.has(i + 1)) e(`source ${i + 1} is never cited in the body`);
  });

  // Related, service links, CTA
  for (const r of a.related ?? []) {
    if (r === a.slug) e("related lists the article itself");
    else if (!published.has(r)) e(`related slug is not a published article: ${r}`);
  }
  if (a.serviceLinks.length < 1 || a.serviceLinks.length > 3) e("serviceLinks needs 1-3 entries");
  const seen = new Set<string>();
  for (const l of a.serviceLinks) {
    if (!(l.href in SERVICE_LINK_ROUTES)) e(`serviceLinks href not allowed: ${l.href}`);
    if (seen.has(l.href)) e(`serviceLinks duplicate: ${l.href}`);
    seen.add(l.href);
    if (l.reason.trim().length < 20) e(`serviceLinks reason too short for ${l.href}`);
  }
  if (a.cta.text.trim().length < 20 || a.cta.text.length > 300) e("cta.text must be 20-300 characters");
  if (a.cta.emailSubject.trim().length < 8 || a.cta.emailSubject.length > 120) {
    e("cta.emailSubject must be 8-120 characters");
  }

  // Human approval record
  if (a.status === "published") {
    const r = a.editorialReview;
    if (!r || !r.approvedBy.trim() || !validDate(r.approvedOn)) {
      e("published articles need editorialReview { approvedBy, approvedOn }");
    } else if (r.approvedOn > a.datePublished) {
      e("editorialReview.approvedOn is after datePublished");
    }
  }

  // Heuristic warnings. They are prompts for the reviewer, not quality checks.
  for (const b of a.body) {
    if (b.type === "table") {
      const cells = [b.caption ?? "", ...b.headers, ...b.rows.flat()].join(" ");
      if (/\d/.test(cells) && !/\[\d{1,2}\]/.test(cells)) {
        w(`table "${b.caption ?? b.headers.join("/")}" has figures but no citation`);
      }
    }
  }
  for (const s of a.body.filter((b) => b.type !== "table").flatMap(blockStrings)) {
    for (const sentence of s.split(/(?<=[.!?])\s+/)) {
      if (/\d/.test(plainText(sentence)) && !/\[\d{1,2}\]/.test(sentence)) {
        w(`number without a citation: "${plainText(sentence).slice(0, 90)}"`);
      }
    }
    const lower = s.toLowerCase();
    for (const f of FILLER) if (lower.includes(f)) w(`filler phrase "${f}"`);
    if (s.includes("—")) w("contains an em dash");
  }

  return { errors, warnings };
}

export function validateRegistry(all: Article[], today: string): Result {
  const errors: string[] = [];
  const warnings: string[] = [];
  const slugs = new Set<string>();
  for (const a of all) {
    if (slugs.has(a.slug)) errors.push(`duplicate slug: ${a.slug}`);
    slugs.add(a.slug);
  }
  const published = new Set(all.filter((a) => a.status === "published").map((a) => a.slug));
  for (const a of all) {
    const r = validateArticle(a, published, today);
    if (a.status === "published") {
      errors.push(...r.errors);
    } else {
      warnings.push(...r.errors.map((m) => `(draft) ${m}`));
    }
    warnings.push(...r.warnings);
  }
  return { errors, warnings };
}
