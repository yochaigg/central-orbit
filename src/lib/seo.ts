import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

// Page-specific social metadata, so subpages do not inherit the homepage title.
export function socialMeta(opts: {
  title: string;
  description: string;
  path: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  const title = `${opts.title} | ${SITE.name}`;
  return {
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE.name,
      title,
      description: opts.description,
      url: `${SITE.url}${opts.path}`,
    },
    twitter: { card: "summary_large_image", title, description: opts.description },
  };
}

export function twitterMeta(title: string, description: string): Pick<Metadata, "twitter"> {
  return { twitter: { card: "summary_large_image", title, description } };
}
