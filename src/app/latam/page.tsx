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
  title: "Doing Business in Latin America | Market Entry Strategy in Montevideo & LATAM | Central Orbit",
  description:
    "Expert Latin America market entry strategy and commercial advisory. Doing business in LATAM with operations in Montevideo, Uruguay. Help international companies build customers, sales channels, and revenue across Brazil, Argentina, and Latin America. Commercial advisory, distributor partnerships.",
  keywords: [
    "doing business in LATAM",
    "doing business in Latin America",
    "Montevideo business",
    "Uruguay market entry",
    "Latin America market entry",
    "LATAM commercial advisory",
    "Latin America distributor strategy",
    "Brazil Argentina market entry",
  ],
  openGraph: {
    title: "Doing Business in Latin America | Montevideo & LATAM Markets | Central Orbit",
    description:
      "Expert commercial advisory for international companies entering Latin America and LATAM markets. Operations in Montevideo, Uruguay with strategic reach across Brazil and Argentina.",
    type: "website",
    url: "https://central-orbit.com/latam",
  },
};

const services = [
  {
    title: "Market Assessment & Entry Strategy",
    description:
      "Deep market analysis and go-to-market strategy for LATAM. Tailored to your product, positioning, timeline, and regional focus.",
    icon: Globe,
  },
  {
    title: "Distributor & Channel Strategy",
    description:
      "Identifying, vetting, and structuring partnerships with local distributors across Brazil, Argentina, Uruguay, and Latin America.",
    icon: Users,
  },
  {
    title: "Commercial Execution",
    description:
      "Hands-on support through regulatory compliance, entity formation, pricing strategy, and local business development across LATAM markets.",
    icon: Building2,
  },
  {
    title: "Network & Relationships",
    description:
      "Deep networks across Brazil, Argentina, and Uruguay. Jewish and Israeli business community connections for partnership acceleration.",
    icon: Network,
  },
  {
    title: "Fractional Leadership",
    description: "Senior commercial leadership embedded in your LATAM operations.",
    icon: MapPin,
  },
];

const regions = [
  {
    name: "Brazil Market",
    description:
      "South America's largest economy. Opportunities in technology, advanced manufacturing, and enterprise services. Complex regulatory environment requires expert navigation.",
  },
  {
    name: "Argentina Market",
    description:
      "Strong technology and innovation ecosystem. Growing opportunities in software, business services, and industrial exports. Strategic location for regional distribution.",
  },
  {
    name: "Uruguay & LATAM Hub",
    description:
      "Central Orbit base for Latin America operations. Stable regulatory environment, strong tech community, strategic gateway to Brazil and Argentina markets.",
  },
];

const faqs = [
  {
    question: "Why do business in Latin America and LATAM markets?",
    answer:
      "LATAM offers massive market opportunity—over 650 million people—with growing middle class, digital adoption, and economic development. Brazil alone is the world's 9th largest economy. For technology companies, LATAM is a fast-growing market with strong demand for innovation. Local advantages: proximity to North America, Spanish/Portuguese language bridge, shared business culture.",
  },
  {
    question: "What makes Montevideo a strategic base for LATAM operations?",
    answer:
      "Montevideo and Uruguay offer a stable platform for regional expansion. Strong business infrastructure, excellent internet connectivity, tax-efficient setup, and a vibrant tech community. It's a gateway to Brazil (85M+ people) and Argentina markets. The city has a growing startup ecosystem and is increasingly attractive for regional headquarters and operations.",
  },
  {
    question: "How does doing business in Brazil differ from other LATAM markets?",
    answer:
      "Brazil is the largest LATAM economy by far—complex but high-reward. Market size justifies specialized expertise. Different regulations, tax structure, and business practices than Uruguay or Argentina. Portuguese language essential. We have on-ground experience navigating Brazilian regulatory complexity and building distributor relationships with major players.",
  },
  {
    question: "What's the timeline for Latin America market entry?",
    answer:
      "Timeline varies by market: Uruguay entry can happen in 3-6 months, Brazil typically 9-18 months given regulatory complexity. Argentina 6-12 months. We accelerate timelines through established relationships with government agencies, chambers of commerce, and distributor networks across LATAM.",
  },
  {
    question: "How does the Jewish/Israeli network advantage work in LATAM?",
    answer:
      "There's a thriving Jewish business community across Latin America—particularly in Brazil, Argentina, and Uruguay. This network accelerates partnerships, introductions, and deal flow. For Israeli companies or companies with Israeli founders, this creates unique advantage. For international companies, we bridge into these networks for partnership acceleration and market credibility.",
  },
  {
    question: "What regulatory challenges should I expect in Latin America?",
    answer:
      "Each LATAM country has distinct regulatory environment. Brazil: complex tax system and federal regulations. Argentina: price controls and currency considerations. Uruguay: simpler environment but smaller market. We handle regulatory compliance, entity formation, tax strategy, and currency planning to smooth your market entry.",
  },
];

export default function LatamPage() {
  // Schema.org JSON-LD markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Central Orbit",
    url: "https://central-orbit.com",
    logo: "https://central-orbit.com/favicon.svg",
    description:
      "Commercial advisory and execution for international companies building customers, channels and revenue in China and Latin America.",
    sameAs: ["https://central-orbit.com"],
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

  const montevideoLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Central Orbit - Montevideo Office",
    image: "https://central-orbit.com/favicon.svg",
    description:
      "Latin America market entry advisory, commercial advisory, and business development in Montevideo and LATAM",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bv. España 1087",
      addressLocality: "Montevideo",
      addressRegion: "Montevideo",
      postalCode: "11800",
      addressCountry: "UY",
    },
    areaServed: ["UY", "BR", "AR", "Latin America", "LATAM"],
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
        item: "https://central-orbit.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Doing Business in Latin America",
        item: "https://central-orbit.com/latam",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(montevideoLocalBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section with Background Image */}
      <section
        className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden"
        style={{
          backgroundImage: "url(/MVD.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

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
              Your Gateway to Doing Business in Latin America
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-xl md:text-2xl text-white font-light max-w-2xl">
              Strategic market entry advisory for LATAM. Based in Montevideo, we help international companies build customers, sales channels, and revenue across Brazil, Argentina, and Latin America.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-16 bg-gradient-to-b from-accent to-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  Latin America: A Massive Growing Market
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                LATAM represents over 650 million people and some of the world's fastest-growing markets. Brazil alone is the world's 9th largest economy. Yet for international companies, navigating the complexities of Latin America market entry requires deep local expertise, established relationships, and understanding of regional business practices. We've built that expertise from our base in Montevideo, with strategic reach across Brazil, Argentina, and LATAM.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Montevideo */}
      <section className="py-16 bg-gradient-to-b from-accent/10 to-primary/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  Montevideo: Your Strategic Hub for LATAM Expansion
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                Montevideo is an ideal base for Latin America market entry and regional operations. Uruguay offers a stable business environment, efficient regulatory process, excellent internet infrastructure, and a vibrant tech community. It's the gateway to two of LATAM's largest markets—Brazil (210M+ population) and Argentina. Our Montevideo office gives you a established platform for building your LATAM presence and managing regional expansion.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Regional Markets */}
      <section className="py-16 bg-gradient-to-b from-white to-accent/10">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                LATAM Markets We Serve
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-8 max-w-3xl">
            {regions.map((region, i) => (
              <FadeIn key={region.name} delay={i * 0.1}>
                <div className="border-l-4 border-gradient-to-b from-accent to-primary bg-gradient-to-r from-accent/10 to-transparent pl-6 py-4 rounded-r-lg">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                    {region.name}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {region.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-primary/5">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                LATAM Commercial Services & Market Entry Support
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

      {/* Network Advantage */}
      <section className="py-16 bg-gradient-to-b from-white to-accent/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  Bridge Built on Real Networks
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                There's a thriving Jewish business network across Latin America—particularly vibrant in Brazil, Argentina, and Uruguay. This network accelerates partnerships, opens doors, and accelerates market entry. For Israeli companies or companies with Israeli founders, this represents a real competitive advantage for Latin America expansion. For all international companies, we bridge you into these networks, creating partnership opportunities and market credibility that would take years to build independently.
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
                  Who We Work With for LATAM Market Entry
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                Established companies assessing Latin America for the first time, businesses preparing to enter LATAM or expand within the region, and leadership teams reassessing an approach that hasn't delivered results. Companies with genuine products, real technical advantage, and commitment to building the right partnerships in the right way across LATAM markets.
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
                LATAM success requires patience, persistence, and commitment to building real relationships. Market entry strategy is not about quick wins. We work with partners who understand this and are ready for the long game of building Latin America business.
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
                Common Questions About Doing Business in LATAM
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <details className="group border border-accent/30 rounded-lg p-6 hover:border-primary transition-colors">
                  <summary className="flex cursor-pointer items-center justify-between font-medium text-primary">
                    <span className="text-lg">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className="group-open:rotate-180 transition-transform"
                    />
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
      <section className="py-20 bg-gradient-to-b from-accent/10 via-primary/5 to-accent/5">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Explore Doing Business in Latin America?
            </h2>
            <p className="text-text-light text-lg mb-8 max-w-2xl mx-auto">
              If LATAM is on your horizon, we should talk. Let's discuss your market entry strategy and commercial goals for Brazil, Argentina, or other Latin America markets.
            </p>
            <Link
              href="mailto:info@central-orbit.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-md font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </FadeIn>

          {/* Montevideo Office */}
          <FadeIn delay={0.2}>
            <div className="mt-16 max-w-2xl mx-auto bg-white/50 backdrop-blur rounded-lg p-8 border border-accent/20">
              <p className="text-sm font-semibold text-primary mb-2">
                MONTEVIDEO OFFICE
              </p>
              <p className="text-text-light">Bv. España 1087</p>
              <p className="text-text-light">Montevideo, Uruguay 11800</p>
              <p className="text-text-light">Latin America Hub</p>
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

          {/* Link to China */}
          <FadeIn delay={0.3}>
            <div className="mt-8">
              <p className="text-text-light text-sm mb-4">
                Also exploring other markets?{" "}
                <Link
                  href="/china"
                  className="text-primary font-medium hover:underline"
                >
                  Learn about doing business in China
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
