import type { Metadata } from "next";
import SkincarePage from "../skincare/page";

// Canonical China-skincare destination. Reuse the maintained skincare content
// so the original /skincare address never becomes a competing second version.
export const metadata: Metadata = {
  title: "China Skincare Market Entry & Growth",
  description:
    "China market-entry and growth research for established overseas skincare brands, including brands already selling in China. Product positioning, channels and practical commercial planning.",
  alternates: { canonical: "/china-skincare" },
  openGraph: {
    title: "China Skincare Market Entry & Growth | Central Orbit",
    description:
      "Research and practical commercial planning for overseas skincare brands entering China or seeking to grow there.",
    url: "https://www.central-orbit.com/china-skincare",
    type: "website",
    locale: "en_US",
    siteName: "Central Orbit",
    images: "/opengraph-image",
  },
};

export default SkincarePage;
