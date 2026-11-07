import type { Article } from "../types";

// Copy this file to <slug>.ts, replace every [REPLACE] marker, then import it
// in ./index.ts. This template is not registered and is never built into a page.
export const article: Article = {
  slug: "replace-with-kebab-case-slug",
  status: "draft",
  cluster: "latam-skincare", // "latam-skincare" | "china-skincare" | "distributors"
  title: "[REPLACE] Headline that states the business question's subject",
  seoTitle: "[REPLACE] 55 characters or fewer",
  description:
    "[REPLACE] 70 to 165 characters describing what a skincare executive will learn and decide.",
  businessQuestion: "[REPLACE] The question an executive asks before committing resources?",
  shortAnswer:
    "[REPLACE] The answer in two or three sentences, with the main condition or caveat.",
  author: "yochai-golan",
  datePublished: "2026-01-01",
  dateModified: "2026-01-01",
  body: [
    { type: "h2", text: "[REPLACE] First section" },
    { type: "p", text: "[REPLACE] Every figure or regulatory statement needs a citation marker like [1]." },
    { type: "h2", text: "[REPLACE] Second section" },
    { type: "p", text: "[REPLACE] Link related pages inline, for example [the China skincare service](/china-skincare)." },
  ],
  sources: [
    {
      title: "[REPLACE] Document title",
      publisher: "[REPLACE] Issuing body",
      url: "https://example.com/replace",
      accessed: "2026-01-01",
      kind: "primary",
    },
  ],
  related: [],
  serviceLinks: [
    { href: "/china-skincare", reason: "[REPLACE] Why this service is relevant to this article's question." },
  ],
  cta: {
    text: "[REPLACE] One factual sentence on what a conversation with Central Orbit would cover.",
    emailSubject: "[REPLACE] Subject line",
  },
  // editorialReview: { approvedBy: "Yochai Golan", approvedOn: "YYYY-MM-DD" }, // add only after sign-off
};
