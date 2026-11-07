import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/content/insights";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

// Indexable corporate pages. /skincare is a duplicate of /china-skincare and the
// China skincare guides are noindex campaign resources, so neither is listed.
// scripts/verify-build.mjs cross-checks this list against the built output.
const PAGES = [
  "",
  "/about",
  "/china",
  "/china-skincare",
  "/clients",
  "/contact",
  "/k-beauty-latam",
  "/latam",
  "/markets",
  "/waste-to-energy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = PAGES.map((p) => ({ url: `${SITE.url}${p}` }));
  const articles = getPublishedArticles();
  if (articles.length > 0) {
    const newest = articles.reduce((m, a) => (a.dateModified > m ? a.dateModified : m), "");
    entries.push({ url: `${SITE.url}/insights`, lastModified: newest });
    for (const a of articles) {
      entries.push({ url: `${SITE.url}/insights/${a.slug}`, lastModified: a.dateModified });
    }
  }
  return entries;
}
