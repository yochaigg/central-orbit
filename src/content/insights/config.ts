// Editorial configuration for /insights. Facts here are structural only.

export const CLUSTERS = {
  "latam-skincare": {
    label: "LATAM skincare and K-Beauty",
    description:
      "Questions skincare and K-Beauty brands ask before committing resources to Latin America: markets, regulation, channels and partners.",
  },
  "china-skincare": {
    label: "China skincare",
    description:
      "Questions overseas skincare brands ask before entering or developing a presence in China: approvals, channels, operations and economics.",
  },
  distributors: {
    label: "Distributors and execution",
    description:
      "How to choose, structure and manage distributors and commercial partners, in Latin America and China.",
  },
} as const;

export type ClusterId = keyof typeof CLUSTERS;
export const CLUSTER_IDS = Object.keys(CLUSTERS) as ClusterId[];

// Routes an article may link to inline. Keep in sync with src/app.
export const KNOWN_ROUTES: ReadonlySet<string> = new Set([
  "/",
  "/about",
  "/china",
  "/china-skincare",
  "/china-skincare-guides",
  "/china-skincare-guides/product-story",
  "/china-skincare-guides/shelf",
  "/clients",
  "/contact",
  "/insights",
  "/k-beauty-latam",
  "/latam",
  "/markets",
  "/waste-to-energy",
]);

// Routes an article may list as a related service. Each use needs a stated reason.
export const SERVICE_LINK_ROUTES: Readonly<Record<string, string>> = {
  "/china-skincare": "China skincare services",
  "/china": "China market entry",
  "/latam": "Latin America market entry",
  "/k-beauty-latam": "K-Beauty LATAM readiness quiz",
  "/about#services": "How we help",
};

export const CONTACT_EMAIL = "info@central-orbit.com";
