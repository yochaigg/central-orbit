export const SITE = {
  name: "Central Orbit",
  tagline: "Western products. Chinese customers.",
  description:
    "Commercial advisory and execution for Western companies building customers, channels and revenue in China.",
  url: "https://central-orbit.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How We Help", href: "/about#services" },
  { label: "Experience", href: "/clients" },
  { label: "Industries", href: "/markets" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const ABOUT = {
  paragraphs: [
    "Central Orbit helps established Western companies build customers, sales channels and revenue in China.",
    "We work with companies assessing China for the first time, businesses preparing to enter or expand, and leadership teams reassessing an approach that has not delivered the expected results.",
    "Our model combines senior Western commercial leadership with trusted relationships and operational capabilities inside China. We focus on the decisions and execution required to turn market potential into a workable commercial path.",
  ],
};

export const SERVICES = [
  {
    title: "China Commercial Assessment",
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
    title: "Fractional China Commercial Leadership",
    description:
      "Senior commercial representation for companies that need China capability without building a full internal team.",
    icon: "Users",
  },
] as const;

export const STATS = [
  { value: "20+", label: "Years in International Growth" },
  { value: "China", label: "Customers, Channels & Partners" },
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
    phone: "+86 10 82390301",
  },
  {
    city: "London",
    address: [
      "71-75 Shelton Street",
      "Covent Garden",
      "London, WC2H 9JQ",
    ],
    phone: "+44 20 3897 2233",
  },
] as const;
