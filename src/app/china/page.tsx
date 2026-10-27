import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Globe,
  Users,
  Building2,
  Network,
  MapPin,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Doing Business in China | Market Entry Strategy & Commercial Advisory",
  description:
    "Expert China market entry strategy and commercial advisory. 27 years helping international companies build customers, sales channels, and revenue in China. Market assessment, distributor partnerships, regulatory compliance, and fractional leadership.",
  keywords: [
    "doing business in China",
    "China market entry",
    "China commercial advisory",
    "China distributor strategy",
    "market entry strategy China",
    "China business development",
    "regulatory compliance China",
  ],
  openGraph: {
    title: "Doing Business in China | Market Entry Strategy | Central Orbit",
    description:
      "27 years of hands-on experience helping international companies build customers, sales channels, and revenue in China.",
    type: "website",
    locale: "en_US",
    siteName: "Central Orbit",
    url: "https://www.central-orbit.com/china",
    images: "/opengraph-image",
  },
  alternates: { canonical: "/china" },
};

const services = [
  {
    title: "Market Assessment & Entry",
    description:
      "Deep market analysis and go-to-market strategy tailored to your product, positioning, and timeline.",
    icon: Globe,
  },
  {
    title: "Distributor & Channel Strategy",
    description:
      "Identifying, vetting, and structuring partnerships with local distributors and channel partners.",
    icon: Users,
  },
  {
    title: "Commercial Execution",
    description:
      "Hands-on support through regulatory compliance, entity formation, pricing strategy, and local business development.",
    icon: Building2,
  },
  {
    title: "Relationship Network",
    description:
      "27 years of trusted relationships with industry leaders, government contacts, and business partners across sectors.",
    icon: Network,
  },
  {
    title: "Fractional Leadership",
    description: "Senior commercial leadership embedded in your China operations.",
    icon: MapPin,
  },
];

const sectors = [
  {
    name: "Technology & Semiconductors",
    description:
      "Semiconductor design, manufacturing, equipment, and software companies entering the world's largest chip market.",
  },
  {
    name: "Advanced Manufacturing",
    description:
      "Industrial equipment, automation, and specialized manufacturing for the fastest-growing industrial base in the world.",
  },
  {
    name: "Energy & Infrastructure",
    description:
      "Clean energy, energy storage, grid technology, and infrastructure solutions for rapid-scale markets.",
  },
  {
    name: "B2B Services",
    description:
      "Commercial advisory, technical services, and platform businesses targeting enterprises across sectors.",
  },
];

const faqs = [
  {
    question: "How long does it take to enter the China market?",
    answer:
      "Timeline varies by sector and complexity, typically 6-18 months from initial assessment to first revenue. Technology and manufacturing sectors often move faster with the right partners and strategy in place. We focus on realistic timelines that account for regulatory compliance and relationship building.",
  },
  {
    question: "What are the main challenges when doing business in China?",
    answer:
      "Key challenges include navigating regulatory requirements, finding trustworthy local partners, understanding market dynamics, pricing strategy, and managing long-term relationships. Cultural and business practice differences require on-ground expertise. We've spent 27 years building solutions for exactly these challenges.",
  },
  {
    question: "Do I need a local partner or distributor in China?",
    answer:
      "For most international companies, local partnerships are essential. China's market structure and regulatory environment make independent operations extremely difficult. Our distributor and channel strategy service identifies, vets, and structures partnerships that deliver real results.",
  },
  {
    question: "What is the cost of establishing a business in China?",
    answer:
      "Costs range significantly based on sector, entity type, and operational scope. Initial entity formation and regulatory compliance typically run $10,000-50,000. Market assessment and channel development add to this. We provide transparent cost guidance tailored to your specific situation.",
  },
  {
    question: "How does the China regulatory environment affect market entry?",
    answer:
      "Regulatory compliance is fundamental to China market entry. Requirements vary by sector and product type. Foreign investment regulations, licensing, IP protection, and data residency all require expert navigation. Our commercial execution service includes hands-on regulatory support.",
  },
  {
    question: "What sectors are best positioned for China entry right now?",
    answer:
      "Technology, semiconductors, advanced manufacturing, clean energy, and B2B services see strong opportunity. China's dual-circulation strategy prioritizes domestic supply chain development and technological advancement. We specialize in exactly these sectors.",
  },
];

export default function ChinaPage() {
  // Schema.org JSON-LD markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Central Orbit",
    url: "https://www.central-orbit.com",
    logo: "https://www.central-orbit.com/favicon.svg",
    description:
      "Commercial advisory and execution for international companies building customers, channels and revenue in China and Latin America.",
    sameAs: [
      "https://www.central-orbit.com",
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "17th Floor, Building A, Tsinghua Tongfang Hi-Tech Plaza",
        addressLocality: "Beijing",
        postalCode: "100083",
        addressCountry: "CN",
        name: "Beijing Office",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Bv. España 1087",
        addressLocality: "Montevideo",
        postalCode: "11800",
        addressCountry: "UY",
        name: "Montevideo Office",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business Development",
      email: "info@central-orbit.com",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Central Orbit - Beijing Office",
    image: "https://www.central-orbit.com/favicon.svg",
    description: "China market entry advisory and commercial execution",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17th Floor, Building A, Tsinghua Tongfang Hi-Tech Plaza",
      addressLocality: "Beijing",
      postalCode: "100083",
      addressCountry: "CN",
    },
    areaServed: ["CN", "Asia"],
    priceRange: "$$",
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.central-orbit.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Doing Business in China",
        item: "https://www.central-orbit.com/china",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-accent/40 z-0" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <div className="w-9 h-9 border-[3px] border-white rounded-full" />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Your Gateway to Doing Business in China
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-xl md:text-2xl text-white font-light max-w-2xl">
              27 years of hands-on experience helping international companies build customers, sales channels, and revenue in China through market entry strategy, commercial advisory, and trusted local partnerships.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Dedicated China skincare destination */}
      <section className="bg-[#fff8f3] py-10 border-b border-[#eadbdc]">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a35670] mb-2">
                  Sector focus / Beauty &amp; Skincare
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-[#463147] tracking-tight">
                  Bringing a skincare brand to China—or growing one already there?
                </h2>
                <p className="mt-2 text-[#685568] max-w-2xl leading-relaxed">
                  Explore a dedicated approach to product positioning, competition, B2C routes and practical commercial planning.
                </p>
              </div>
              <Link
                href="/china-skincare"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#9b506d] text-white px-5 py-3 text-sm font-semibold hover:bg-[#7e3b55] transition-colors"
              >
                Explore China skincare <ArrowRight size={17} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-16 bg-gradient-to-b from-white to-accent/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  China: The World's Largest Market
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                China is the world's second-largest economy and the largest market for countless products and services. It is also one of the most challenging markets to enter without the right local foundation. Success requires more than ambition — it requires understanding the regulatory landscape, building genuine relationships with the right partners, and committing to the long-term strategy that makes success possible. We have spent 27 years building exactly that foundation for companies pursuing China market entry and commercial growth.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Beijing */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-accent/15">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  Beijing: Your Anchor for China Commercial Success
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                Beijing is where relationships matter most. It's the political and regulatory capital of China, and where the highest-level partnerships and government relationships are built. Operating from Beijing gives your company direct access to the networks, regulatory expertise, and partnership opportunities that make market entry feasible. It's the foundation from which successful China operations begin. Our Beijing office positions you for commercial success in the world's largest market.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sectoral Focus */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-white">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                China Market Sectors We Know
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-8 max-w-3xl">
            {sectors.map((sector, i) => (
              <FadeIn key={sector.name} delay={i * 0.1}>
                <div className="border-l-4 border-gradient-to-b from-accent to-primary bg-gradient-to-r from-accent/10 to-transparent pl-6 py-4 rounded-r-lg">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                    {sector.name}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <p className="mt-10 text-text-light leading-relaxed text-lg max-w-3xl font-medium">
              Whatever your sector, we've spent 27 years building relationships and expertise in the industries that matter most for China market entry and commercial development.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services - China Market Entry & Commercial Advisory */}
      <section className="py-16 bg-gradient-to-b from-primary/8 to-accent/10">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                China Market Entry & Commercial Services
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={i * 0.05}>
                  <div className="bg-white rounded-lg p-8 border-2 border-accent/30 hover:border-primary hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-accent/5">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon
                        className="text-primary"
                        size={28}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authentic Relationships */}
      <section className="py-16 bg-gradient-to-b from-white to-primary/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  Built on 27 Years of Authentic Relationships
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                27 years is enough time to build genuine relationships with the right people — government officials who understand your sector, industry leaders who can open doors, and business partners who have delivered results. These relationships don't appear in a business database. They exist because of years of consistent presence, trust, and mutual success. That's the competitive advantage you get when you partner with Central Orbit for China market entry and commercial advisory.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  Who We Work With
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                Established companies assessing China for the first time, businesses preparing to enter or expand, and leadership teams reassessing an approach that hasn't delivered the expected results. Companies with genuine products, real technical advantage, and the commitment to build the right partnerships in the right way. If you're serious about doing business in China, we should talk.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Long-term Commitment */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-white">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="max-w-3xl border-l-4 border-primary pl-6 py-2">
              <p className="text-text-light leading-relaxed italic">
                China success is built on patience, persistence, and real commitment. Market entry strategy requires long-term thinking. We work with partners who understand this and are ready for the long game.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-white to-accent/5">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                Common Questions About Doing Business in China
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <details className="group border border-accent/30 rounded-lg p-6 hover:border-primary transition-colors">
                  <summary className="flex cursor-pointer items-center justify-between font-medium text-primary">
                    <span className="text-lg">{faq.question}</span>
                    <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-text-light leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-b from-primary/10 via-accent/8 to-primary/5">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Explore Doing Business in China?
            </h2>
            <p className="text-text-light text-lg mb-8 max-w-2xl mx-auto">
              If China is on your horizon, we should talk. Let's discuss your market entry strategy and commercial goals.
            </p>
            <Link
              href="mailto:info@central-orbit.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-md font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </FadeIn>

          {/* Beijing Office */}
          <FadeIn delay={0.2}>
            <div className="mt-16 max-w-2xl mx-auto bg-white/50 backdrop-blur rounded-lg p-8 border border-accent/20">
              <p className="text-sm font-semibold text-primary mb-2">
                BEIJING OFFICE
              </p>
              <p className="text-text-light">17th Floor, Building A</p>
              <p className="text-text-light">Tsinghua Tongfang Hi-Tech Plaza</p>
              <p className="text-text-light">Wangzhuang Road 1, Haidian District</p>
              <p className="text-text-light">Beijing 100083, China</p>
              <p className="text-text-light mt-3">
                <a
                  href="mailto:info@central-orbit.com"
                  className="hover:text-primary transition-colors"
                >
                  info@central-orbit.com
                </a>
              </p>
            </div>
          </FadeIn>

          {/* Link to LATAM */}
          <FadeIn delay={0.3}>
            <div className="mt-8">
              <p className="text-text-light text-sm mb-4">
                Also exploring opportunities? <Link href="/latam" className="text-primary font-medium hover:underline">Learn about doing business in Latin America</Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
