import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "China Skincare | Commercial Services",
  description:
    "Central Orbit's China skincare services cover market assessment, brand and product positioning, B2C channel strategy, commercial partnerships, operational preparation and market-entry or growth planning.",
  openGraph: {
    title: "China Skincare | Central Orbit",
    description:
      "Commercial services for overseas skincare brands entering China or developing their existing business in the market.",
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
    title: "Market and competitive assessment",
    description:
      "Research relevant skincare categories, competing brands and products, visible consumer propositions, listed prices and channel conditions. Identify opportunities, constraints and the questions that require further validation.",
  },
  {
    number: "02",
    title: "Brand and product positioning",
    description:
      "Evaluate priority products or routines, the brand story, ingredient and benefit claims, supporting evidence and points of differentiation. Translate those findings into a clearer proposition for the Chinese market.",
  },
  {
    number: "03",
    title: "Online B2C channel strategy",
    description:
      "Compare suitable Chinese online sales routes and platform models. Assess channel fit, positioning requirements, consumer access, costs, operating responsibilities and the trade-offs between alternatives.",
  },
  {
    number: "04",
    title: "Commercial partners and operating model",
    description:
      "Evaluate potential distributor, service-provider and channel-partner roles, including the implications for pricing control, brand presentation, commercial responsibilities and access to customer information.",
  },
  {
    number: "05",
    title: "Market-entry and growth planning",
    description:
      "Turn research into a practical sequence of priorities: product selection, channel decisions, commercial preparation, cost categories, milestones and the next actions for entering China or strengthening an existing presence.",
  },
  {
    number: "06",
    title: "Operational and regulatory preparation",
    description:
      "Map relevant product documentation, claims and labeling questions, fulfillment, warehousing, returns and other operational dependencies. Identify matters requiring confirmation by qualified local specialists.",
  },
] as const;

export default function SkincarePage() {
  return (
    <>
      <section className="bg-[#fff7f1] border-b border-[#eadad8] pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#94546b] mb-5">
              Central Orbit / China
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#3c2d3f] leading-[1.12] max-w-4xl">
              Skincare market entry
              <span className="block italic text-[#a45b73]">and commercial growth</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-[#594b59] leading-relaxed max-w-3xl">
              Central Orbit provides commercial research and planning for overseas
              skincare brands considering the Chinese market and for brands
              already selling in China that want to strengthen their position.
            </p>
            <p className="mt-4 text-base text-[#665865] leading-relaxed max-w-3xl">
              The work connects product positioning, market evidence, routes to
              consumers, partnerships and the operational decisions behind
              market entry or expansion.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#96546d] mb-3">
              Scope of work
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#3e3040]">
              Commercial services
            </h2>
            <p className="mt-4 text-[#645665] leading-relaxed max-w-3xl">
              Services are tailored to the brand&apos;s products, current market
              position and commercial objectives. The emphasis is on evidence,
              workable alternatives and decisions that can be acted upon.
            </p>
          </FadeIn>
          <div className="mt-10 border-t border-[#e5d5d7]">
            {services.map((service, index) => (
              <FadeIn key={service.number} delay={Math.min(index * 0.05, 0.2)}>
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
              Market situations
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#3e3040]">
              Entry and existing operations
            </h2>
          </FadeIn>
          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-10">
            <FadeIn>
              <div className="border-t-2 border-[#b66c82] pt-5">
                <h3 className="font-serif text-2xl text-[#413144]">
                  Preparing to enter China
                </h3>
                <p className="mt-4 text-[#675968] leading-relaxed">
                  Assessment of priority products, competing offers, possible
                  customer segments and channel routes, followed by a structured
                  preparation and market-entry plan.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border-t-2 border-[#ad96c4] pt-5">
                <h3 className="font-serif text-2xl text-[#413144]">
                  Already active in China
                </h3>
                <p className="mt-4 text-[#675968] leading-relaxed">
                  Review of existing positioning and routes to market, competing
                  products and commercial priorities, with a focus on
                  identifying practical opportunities for improvement and growth.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <p className="mt-10 text-sm leading-relaxed text-[#796b76] max-w-4xl">
              Commercial research and planning identify requirements and
              dependencies. Regulatory approval, legal advice, platform
              onboarding and other specialist implementation are separate
              activities requiring qualified providers.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
