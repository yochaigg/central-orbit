import type { Article } from "./types";
import { validateRegistry } from "./validate";
import { articles } from "./articles";

// Build-time gate: a published article that fails validation stops the build.
const today = new Date().toISOString().slice(0, 10);
const result = validateRegistry(articles, today);
if (result.errors.length > 0) {
  throw new Error(
    `Insights content validation failed:\n - ${result.errors.join("\n - ")}`,
  );
}
if (result.warnings.length > 0) {
  console.warn(
    `Insights review prompts (not errors):\n - ${result.warnings.join("\n - ")}`,
  );
}

const byNewest = (a: Article, b: Article) =>
  b.datePublished.localeCompare(a.datePublished) || a.slug.localeCompare(b.slug);

export function getPublishedArticles(): Article[] {
  return articles.filter((a) => a.status === "published").sort(byNewest);
}

// Drafts are routable only in the development server, and only when asked for.
// A production build never includes them.
export function draftsEnabled(): boolean {
  return (
    process.env.NODE_ENV !== "production" &&
    process.env.INSIGHTS_INCLUDE_DRAFTS === "1"
  );
}

export function getRoutableArticles(): Article[] {
  return draftsEnabled()
    ? [...articles].sort(byNewest)
    : getPublishedArticles();
}

// Next.js static export rejects a dynamic route whose params list is empty, so
// while nothing is published the route builds one noindex placeholder instead.
export const EMPTY_SLUG = "_none";

export function getStaticSlugs(): { slug: string }[] {
  const list = getRoutableArticles();
  return list.length > 0 ? list.map((a) => ({ slug: a.slug })) : [{ slug: EMPTY_SLUG }];
}

export function getArticle(slug: string): Article | undefined {
  return getRoutableArticles().find((a) => a.slug === slug);
}

export function getRelated(article: Article, limit = 3): Article[] {
  const pool = getPublishedArticles().filter((a) => a.slug !== article.slug);
  const picked = (article.related ?? [])
    .map((s) => pool.find((a) => a.slug === s))
    .filter((a): a is Article => Boolean(a));
  for (const a of pool) {
    if (picked.length >= limit) break;
    if (a.cluster === article.cluster && !picked.includes(a)) picked.push(a);
  }
  return picked.slice(0, limit);
}

export function readingMinutes(article: Article): number {
  const text = JSON.stringify(article.body);
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export { CLUSTERS, CLUSTER_IDS } from "./config";
export type { Article } from "./types";
