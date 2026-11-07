import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

// Everything is crawlable on purpose. The China skincare guides are kept out of
// search with noindex (HTML meta and _headers), and crawlers must be able to
// fetch them to see that directive, so they are not disallowed here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
