import type { Metadata } from "next";
import SkincarePage from "../skincare/page";

// Canonical China-skincare destination. Reuse the maintained skincare content
// so the original /skincare address never becomes a competing second version.
export const metadata: Metadata = {
  title: "China Skincare | Turnkey Market Entry & Operations",
  description:
    "Turnkey China skincare operations from manufacturer to customer: regulatory approvals, logistics, online stores, platform promotions, KOL campaigns, tax compliance and fulfillment, with the brand retaining ownership.",
  alternates: { canonical: "/china-skincare" },
  openGraph: {
    title: "China Skincare | Turnkey Services | Central Orbit",
    description:
      "Central Orbit operates China skincare logistics, approvals, e-commerce platforms, campaigns, KOLs and compliance as a brand-owned service, not a distributor.",
    url: "https://www.central-orbit.com/china-skincare",
    type: "website",
    locale: "en_US",
    siteName: "Central Orbit",
    images: "/opengraph-image",
  },
};

export default SkincarePage;
