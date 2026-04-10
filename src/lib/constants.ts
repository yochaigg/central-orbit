export const SITE = {
  name: "Central Orbit",
  tagline: "where impossible becomes possible",
  description:
    "International business consultancy helping companies navigate cross-cultural markets across the APAC region since 1998.",
  url: "https://central-orbit.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Markets", href: "/markets" },
  { label: "Clients", href: "/clients" },
  { label: "Waste to Energy", href: "/waste-to-energy" },
  { label: "Contact", href: "/contact" },
] as const;

export const ABOUT = {
  paragraphs: [
    "Since 1998, Central Orbit's team has been dedicated to creating successful businesses around the globe, mostly in the APAC region. Our goal is to help companies overcome the hurdles faced in doing cross-country and cross-cultural business.",
    "Our multinational and Chinese clients choose to work with us because we provide real understanding, deliver practical results, and know how to get things done.",
    "Central Orbit has a sustainable team of local and Western professionals who have experience working in both China and overseas — and have offices and networks of professionals throughout China, the US, and Europe.",
  ],
};

export const SERVICES = [
  {
    title: "Business Development & Market Entry",
    description:
      "End-to-end support for companies entering new APAC markets — from feasibility studies to on-the-ground execution.",
    icon: "TrendingUp",
  },
  {
    title: "Investment Advisory",
    description:
      "Strategic guidance on cross-border investments, joint ventures, and M&A opportunities across China and Asia-Pacific.",
    icon: "Landmark",
  },
  {
    title: "Cross-Cultural Consulting",
    description:
      "Bridging cultural gaps between Western and Asian business practices to build lasting, productive partnerships.",
    icon: "Globe",
  },
  {
    title: "Conference & Event Management",
    description:
      "Organizing and managing international business conferences, trade delegations, and industry summits.",
    icon: "CalendarDays",
  },
] as const;

export const STATS = [
  { value: "25+", label: "Years of Experience" },
  { value: "17+", label: "Industries Served" },
  { value: "3", label: "Continents" },
] as const;

export const MARKETS = [
  { name: "Telecommunications", icon: "Radio" },
  { name: "Mobile Providers", icon: "Smartphone" },
  { name: "Mobile Technology", icon: "Cpu" },
  { name: "Mobile Applications", icon: "AppWindow" },
  { name: "Consumer Technology", icon: "Monitor" },
  { name: "Cosmetics B2B — Raw Materials & Sourcing", icon: "FlaskConical" },
  { name: "Cosmetics B2C", icon: "Sparkles" },
  { name: "Fashion", icon: "Shirt" },
  { name: "Food B2B", icon: "Wheat" },
  { name: "Beauty", icon: "Heart" },
  { name: "Public Security", icon: "ShieldCheck" },
  { name: "Public Safety", icon: "Shield" },
  { name: "Waste Management", icon: "Recycle" },
  { name: "Information Security", icon: "Lock" },
  { name: "Water", icon: "Droplets" },
  { name: "Aviation", icon: "Plane" },
  { name: "Renewable Energy", icon: "Zap" },
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
      "中国北京市海淀区王庄路1号",
      "同方科技广场A座17楼 100083",
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
    phone: "+44 020 3897 2233",
  },
] as const;
