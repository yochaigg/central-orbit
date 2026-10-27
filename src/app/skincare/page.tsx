import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "China Skincare | Turnkey Market Entry & Operations",
  description:
    "Central Orbit manages China skincare market entry and operations from manufacturer to customer: regulatory approvals, logistics, stores, e-commerce platforms, marketing campaigns, KOLs, tax compliance and fulfillment. The brand retains ownership.",
  openGraph: {
    title: "China Skincare | Turnkey Services | Central Orbit",
    description:
      "An end-to-end China skincare operating service covering regulatory work, logistics, online stores, campaigns, KOLs, platform operations and compliance, with the brand retaining ownership.",
    type: "website",
    locale: "en_US",
    siteName: "Central Orbit",
    url: "https://www.central-orbit.com/china-skincare",
    images: "/opengraph-image",
  },
  alternates: { canonical: "/china-skincare" },
};

const services = [
  {
    number: "01",
    title: "Market assessment and commercial strategy",
    description:
      "Assess priority skincare products, competing brands, price positioning, consumers and online channels. Define a commercial model and market-entry or growth priorities for China.",
  },
  {
    number: "02",
    title: "Regulatory work and product approvals",
    description:
      "Manage and coordinate the applicable product registration or notification process, testing, documentation, ingredient and claims checks, labeling, submissions and regulatory approvals with qualified local specialists and authorities.",
  },
  {
    number: "03",
    title: "International logistics and customer fulfillment",
    description:
      "Manage freight coordination, import and customs processes, warehouse arrangements, inventory, domestic distribution, consumer order fulfillment, deliveries and returns—from the manufacturer's dispatch to the customer.",
  },
  {
    number: "04",
    title: "Online stores and platform management",
    description:
      "Set up and operate the agreed brand storefronts and e-commerce channels, including online marketplaces and relevant social-commerce platforms. Manage product listings, merchandising, pricing implementation, stock availability, orders, platform administration and store performance.",
  },
  {
    number: "05",
    title: "Platform promotion, campaigns and KOLs",
    description:
      "Plan and execute platform promotions and digital marketing campaigns, including seasonal events, content localization, influencer and KOL/KOC collaborations, paid media coordination and campaign performance reporting.",
  },
  {
    number: "06",
    title: "Online presence and customer relationships",
    description:
      "Manage the brand's agreed digital presence in China, including official brand content, social-platform activity, community interactions, customer service, ratings, reviews, consumer engagement and repeat-purchase programs.",
  },
  {
    number: "07",
    title: "Tax, reporting and regulatory compliance",
    description:
      "Oversee the tax, accounting, regulatory reporting and continuing compliance work required by the agreed operating structure, coordinating filings and specialist work with appropriately qualified local service providers.",
  },
  {
    number: "08",
    title: "Ongoing operations and commercial growth",
    description:
      "Coordinate local service providers and day-to-day delivery, monitor commercial and operational indicators, report to the brand and adjust channel, campaign, inventory and growth priorities over time.",
  },
] as const;

export default function SkincarePage() {
  return (
    <>
      <section className="bg-[#fff7f1] border-b border-[#eadad8] pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#94546b] mb-5">
              Central Orbit / China Skincare
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#3c2d3f] leading-[1.12] max-w-4xl">
              From manufacturer
              <span className="block italic text-[#a45b73]">to customer in China.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-[#594b59] leading-relaxed max-w-3xl">
              Central Orbit provides turnkey market-entry and operating services
              for overseas skincare brands entering China or developing their
              existing presence. We manage the work across regulatory processes,
              logistics, online stores, marketing and ongoing operations.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#96546d] mb-3">
              The full service
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#3e3040]">
              End-to-end China operations
            </h2>
            <p className="mt-4 text-[#645665] leading-relaxed max-w-3xl">
              Our scope spans the commercial, operational and administrative work
              involved in getting skincare products from their manufacturer to
              customers—and supporting the brand&apos;s ongoing online business.
            </p>
          </FadeIn>
          <div className="mt-10 border-t border-[#e5d5d7]">
            {services.map((service, index) => (
              <FadeIn key={service.number} delay={Math.min(index * 0.04, 0.24)}>
                <div className="grid grid-cols-1 md:grid-cols-[64px_minmax(0,0.92fr)_minmax(0,1.3fr)] gap-3 md:gap-7 py-8 border-b border-[#e5d5d7] items-start">
                  <span className="font-serif text-lg italic text-[#a85e77]">
                    {service.number}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl leading-snug tracking-tight text-[#403242]">
                    {service.title}
                  </h3>
                  <p className="text-[#655766] leading-relaxed text-[15px]">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf5f4] border-t border-[#eadcdb] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#96546d] mb-3">
              Our operating model
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#3e3040]">
              The brand retains ownership.
            </h2>
            <p className="mt-5 text-[#675968] leading-relaxed max-w-3xl">
              The brand owns its products, trademarks, online stores and commercial
              assets. Central Orbit manages the China operation on its behalf,
              from regulatory work and logistics to sales platforms, campaigns
              and day-to-day customer operations. Central Orbit is a service
              provider, not a distributor.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
