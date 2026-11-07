import type { ClusterId } from "./config";
import type { AuthorId } from "./authors";

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] };

export interface Source {
  title: string;
  publisher: string;
  url: string; // https only
  accessed: string; // YYYY-MM-DD, the day a person last checked it
  kind: "primary" | "secondary"; // primary: regulator, statistics office, filing, official text
}

export interface ServiceLink {
  href: string; // a key of SERVICE_LINK_ROUTES
  reason: string; // why this link is relevant to this article
}

export interface Article {
  slug: string;
  status: "draft" | "published";
  cluster: ClusterId;
  /** H1. */
  title: string;
  /** Optional shorter title for search results. Defaults to title. */
  seoTitle?: string;
  /** Meta description. */
  description: string;
  /** The decision-maker's question this article answers. Must end with "?". */
  businessQuestion: string;
  /** The answer in two or three sentences. */
  shortAnswer: string;
  author: AuthorId;
  datePublished: string; // YYYY-MM-DD
  dateModified: string; // YYYY-MM-DD
  /**
   * Body copy. Inline syntax: [label](/internal-route), [label](https://...),
   * [1] for source 1 (1-based index in `sources`), **bold**.
   */
  body: Block[];
  sources: Source[];
  related?: string[]; // slugs of published articles
  serviceLinks: ServiceLink[];
  cta: { text: string; emailSubject: string };
  /** A person's sign-off. Required to publish. Records approval; does not prove accuracy. */
  editorialReview?: { approvedBy: string; approvedOn: string };
}
