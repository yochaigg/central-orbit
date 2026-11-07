export const SITE = {
  name: "Central Orbit",
  tagline: "International products. Global customers.",
  description:
    "Commercial advisory and execution for international companies building customers, channels and revenue in China and Latin America.",
  url: "https://www.central-orbit.com",
};

export const ANALYTICS = {
  umamiSrc: "https://cloud.umami.is/script.js",
  umamiWebsiteId: "59cc10e2-2ec1-45b9-a0da-46e14c6dc601",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How We Help", href: "/about#services" },
  { label: "Experience", href: "/clients" },
  { label: "Industries", href: "/markets" },
  { label: "China", href: "/china" },
  { label: "China Skincare", href: "/china-skincare" },
  { label: "LATAM", href: "/latam" },
  { label: "About", href: "/about" },
] as const;

export type NavLink = { readonly label: string; readonly href: string };

// Insights is added to the navigation only once an article is published.
export function buildNavLinks(showInsights: boolean): readonly NavLink[] {
  if (!showInsights) return NAV_LINKS;
  const i = NAV_LINKS.findIndex((l) => l.href === "/latam");
  return [
    ...NAV_LINKS.slice(0, i + 1),
    { label: "Insights", href: "/insights" },
    ...NAV_LINKS.slice(i + 1),
  ];
}

export const ABOUT = {
  paragraphs: [
    "Central Orbit helps established international companies build customers, sales channels and revenue in China and Latin America.",
    "We work with companies assessing China or Latin America for the first time, businesses preparing to enter or expand, and leadership teams reassessing an approach that has not delivered the expected results.",
    "Our model combines senior international commercial leadership with trusted relationships and operational capabilities in key markets—China and Latin America. We focus on the decisions and execution required to turn market potential into a workable commercial path.",
  ],
};

export const SERVICES = [
  {
    title: "Market Assessment & Entry Strategy",
    description:
      "A clear view of customer demand, competitive position, channels, risks and the case for investment.",
    icon: "TrendingUp",
  },
  {
    title: "Customers, Channels & Partners",
    description:
      "Customer development, distributor selection, channel strategy and strategic partnership building.",
    icon: "Handshake",
  },
  {
    title: "Market Entry & Growth",
    description:
      "A practical route to market covering positioning, commercial model, launch priorities and execution.",
    icon: "Globe",
  },
  {
    title: "Fractional Commercial Leadership",
    description:
      "Senior commercial representation for companies that need China capability without building a full internal team.",
    icon: "Users",
  },
] as const;

export const STATS = [
  { value: "20+", label: "Years in International Growth" },
  { value: "Since 1998", label: "China Market Experience" },
  { value: "US + EU", label: "Client Development Markets" },
] as const;

export const MARKETS = [
  { name: "Industrial Automation", icon: "Cpu" },
  { name: "Machinery & Specialized Equipment", icon: "Settings" },
  { name: "Enterprise & Technical Solutions", icon: "Monitor" },
  { name: "Telecommunications", icon: "Radio" },
  { name: "Agricultural Technology", icon: "Wheat" },
  { name: "Consumer Products", icon: "ShoppingBag" },
  { name: "Beauty & Skincare", icon: "Sparkles" },
  { name: "Food & Ingredients", icon: "FlaskConical" },
  { name: "Information Security", icon: "Lock" },
  { name: "Public Safety", icon: "ShieldCheck" },
  { name: "Water & Waste", icon: "Droplets" },
  { name: "Energy & Sustainability", icon: "Zap" },
] as const;

export const CLIENTS = [
  { name: "GE Transportation", logo: "/images/clients/ge-transportation.svg" },
  { name: "SQream Technologies", logo: "/images/clients/sqream.svg" },
  { name: "iDefend", logo: "/images/clients/idefend.svg" },
  {
    name: "China Semiconductor Industry Association",
    logo: "/images/clients/csia.svg",
  },
] as const;

export const OFFICES = [
  {
    city: "Beijing",
    address: [
      "17th Floor, Building A",
      "Tsinghua Tongfang Hi-Tech Plaza",
      "Wangzhuang Road 1, Haidian District",
      "Beijing 100083, China",
    ],
  },
  {
    city: "London",
    address: [
      "71-75 Shelton Street",
      "Covent Garden",
      "London, WC2H 9JQ",
    ],
  },
  {
    city: "Montevideo",
    address: [
      "Bv. España 1087",
      "Montevideo, Uruguay",
    ],
  },
] as const;
