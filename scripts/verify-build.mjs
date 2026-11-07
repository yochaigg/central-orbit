// Post-build checks for the static export. Run after `npx next build`:
//   node scripts/verify-build.mjs
// Checks structure and directives only. It cannot judge content quality.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const BASE = "https://www.central-orbit.com";
const UMAMI = "cloud.umami.is/script.js";
const failures = [];
const notes = [];
const fail = (m) => failures.push(m);

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const staticGuideRoute = (r) =>
  r === "/china-skincare-guides/shelf" || r === "/china-skincare-guides/brand-review";
const files = walk(OUT);
const htmlFiles = files.filter(
  (f) => f.endsWith(".html") && !/(^|\/)(404|_not-found)\.html$/.test(f),
);
const route = (f) => {
  let r = "/" + f.slice(OUT.length + 1).replace(/\.html$/, "").replace(/\/index$/, "");
  r = r.replace(/^\/index$/, "/");
  return r;
};
const attr = (html, re) => (html.match(re) || [])[1];
const metaRobots = (h) => attr(h, /<meta name="robots" content="([^"]*)"/);
const canonical = (h) => attr(h, /<link rel="canonical" href="([^"]*)"/);

// Sitemap and robots exist
for (const f of ["sitemap.xml", "robots.txt"]) {
  if (!existsSync(join(OUT, f))) fail(`missing ${f}`);
}
const sitemap = existsSync(join(OUT, "sitemap.xml")) ? readFileSync(join(OUT, "sitemap.xml"), "utf8") : "";
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const robots = existsSync(join(OUT, "robots.txt")) ? readFileSync(join(OUT, "robots.txt"), "utf8") : "";
if (!robots.includes(`Sitemap: ${BASE}/sitemap.xml`)) fail("robots.txt does not reference the sitemap");
if (/^\s*Disallow:\s*\/\S*/im.test(robots)) fail("robots.txt disallows a path; noindex pages must stay crawlable");

for (const f of htmlFiles) {
  const r = route(f);
  const h = readFileSync(f, "utf8");
  const isGuide = r.startsWith("/china-skincare-guides");
  const robotsMeta = metaRobots(h) || "";
  const noindex = /noindex/i.test(robotsMeta);
  const canon = canonical(h);
  const url = r === "/" ? BASE : BASE + r;
  const isDraft = h.includes("data-insights-draft");

  if (isDraft) fail(`${r}: draft article present in production output`);
  if (canon && /\/$/.test(canon.replace(BASE, "")) && canon !== BASE + "/") fail(`${r}: canonical has trailing slash (${canon})`);
  if (!isGuide && !noindex && canon && canon.replace(/\/$/, "") !== url && r !== "/skincare") {
    fail(`${r}: canonical ${canon} does not match route`);
  }
  if (!isGuide && !noindex && !canon) fail(`${r}: indexable page has no canonical`);

  const inSitemap = sitemapUrls.includes(url);
  const duplicateOf = canon && canon.replace(/\/$/, "") !== url;
  if (isGuide) {
    if (!noindex) fail(`${r}: guide must be noindex`);
    if (inSitemap) fail(`${r}: guide must not be in the sitemap`);
  } else if (noindex) {
    if (inSitemap) fail(`${r}: noindex page is in the sitemap`);
  } else if (!duplicateOf && !inSitemap) {
    fail(`${r}: indexable page missing from the sitemap`);
  } else if (duplicateOf && inSitemap) {
    fail(`${r}: non-canonical duplicate is in the sitemap`);
  }

  // Umami: exactly one tracker per Next-rendered page. Static guide pages carry their own.
  // Next renders one <link rel="preload"> plus one payload entry per Script instance,
  // so count data-website-id attributes, which appear once per instance.
  const umamiCount = staticGuideRoute(r) ? h.split(UMAMI).length - 1 : h.split("data-website-id").length - 1;
  const staticGuide = staticGuideRoute(r);
  if (staticGuide) {
    if (umamiCount < 1) fail(`${r}: static guide lost its tracker`);
  } else if (umamiCount !== 1) {
    fail(`${r}: expected 1 Umami script reference, found ${umamiCount}`);
  }

  if (r === "/insights/_none") {
    if (!noindex) fail(`${r}: placeholder must be noindex`);
  } else if (r.startsWith("/insights/")) {
    const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
    const text = ld.join("\n");
    for (const t of ["BlogPosting", "BreadcrumbList", "Person"]) {
      if (!text.includes(`"${t}"`)) fail(`${r}: JSON-LD missing ${t}`);
    }
    for (const tag of ld) {
      try { JSON.parse(tag); } catch { fail(`${r}: JSON-LD is not valid JSON`); }
    }
    if (!/property="og:type" content="article"/.test(h)) fail(`${r}: og:type should be article`);
    if (!/property="article:published_time"/.test(h)) fail(`${r}: missing article:published_time`);
    if (!/property="og:image"/.test(h)) fail(`${r}: missing og:image`);
    if (!inSitemap) fail(`${r}: article missing from sitemap`);
  }
}

// Every sitemap URL must map to a built page
for (const u of sitemapUrls) {
  const p = u === BASE ? "/" : u.replace(BASE, "");
  const f = p === "/" ? join(OUT, "index.html") : join(OUT, p + ".html");
  if (!existsSync(f)) fail(`sitemap lists ${u} but no page was built`);
  if (/\/$/.test(u.replace(BASE, "")) && u !== BASE + "/") fail(`sitemap URL has trailing slash: ${u}`);
}

// Guide HTML and PDF headers still present
const headers = existsSync(join(OUT, "_headers")) ? readFileSync(join(OUT, "_headers"), "utf8") : "";
if (!headers.includes("X-Robots-Tag: noindex")) fail("_headers lost the guide noindex rules");

notes.push(`${htmlFiles.length} pages checked, ${sitemapUrls.length} sitemap URLs`);
console.log(notes.join("\n"));
if (failures.length) {
  console.error(`\n${failures.length} problem(s):\n - ${failures.join("\n - ")}`);
  process.exit(1);
}
console.log("verify-build: OK");
