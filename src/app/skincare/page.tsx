import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Skincare Brand China Market Entry — Central Orbit",
  description:
    "Central Orbit builds owned China B2C channels for Western skincare brands — retaining brand control, consumer data, and pricing from day one.",
  openGraph: {
    title: "Skincare Brand China Market Entry — Central Orbit",
    description:
      "A complete China B2C operation, run by us, owned by you. Brand assessment through to ongoing management.",
  },
};

const whatWeBuild = [
  {
    title: "Brand Assessment",
    body: "We assess whether your brand, ingredients and management approach are genuinely ready for China. We say no when the fit is not right.",
  },
  {
    title: "Regulatory Approval",
    body: "Full product registration, trademark protection, CSAR compliance and legal entity setup handled by our on-ground agents.",
  },
  {
    title: "WeChat Mini App",
    body: "Your brand's digital home in China. Built and operated within the WeChat ecosystem where Chinese consumers live.",
  },
  {
    title: "Platform Launch",
    body: "Douyin, Little Red Book and Tmall as you scale. We set up, operate and optimise every platform.",
  },
  {
    title: "Marketing Execution",
    body: "Campaign management, content creation, KOL and KOC relationships. Your story adapted for Chinese consumers without losing what makes your brand distinctive.",
  },
  {
    title: "Ongoing Operations",
    body: "Logistics, inventory, consumer data, CRM and repeat purchase management. From your factory door to the Chinese consumer.",
  },
];

const years = [
  {
    label: "Year 1",
    title: "Validate",
    body: "Trademark registration, regulatory approval, WeChat mini app build, platform setup, brand story adaptation, initial launch and review generation.",
  },
  {
    label: "Year 2",
    title: "Scale",
    body: "Push hero SKUs, expand paid activity, build monthly campaign rhythm and repeat purchase evidence.",
  },
  {
    label: "Year 3",
    title: "Operate",
    body: "Mature CRM, festival playbooks, platform expansion into Tier 2 and Tier 3 cities, full operating scale.",
  },
];

export default function SkincarePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary max-w-3xl leading-tight">
              Own the Brand. Own the Channel. Own the Consumer Relationship.
            </h1>
            <div className="mt-3 w-16 h-1 bg-primary rounded-full" />
            <p className="mt-8 text-text-light text-lg max-w-2xl leading-relaxed">
              Most Western skincare brands entering China hand control to a
              distributor. We do the opposite. We build your owned China B2C
              channel so you keep the brand, the data, the pricing and the
              consumer relationship.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Two Routes */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Two Routes Into China. Very Different Outcomes." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <FadeIn>
              <div className="bg-surface rounded-lg p-8 border border-border h-full">
                <h3 className="font-heading text-lg font-semibold text-text mb-6">
                  Traditional Distributor Route
                </h3>
                <ul className="space-y-4">
                  {[
                    "A purchase order, then limited visibility",
                    "Shelf priority and campaign timing sit with the importer",
                    "Competing brands can be promoted harder in the same quarter",
                    "You rarely learn who buys, why they buy or when they repurchase",
                    "Each shipment is a transaction, not an owned China asset",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-text-light leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-light/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-surface rounded-lg p-8 border border-primary/30 h-full">
                <h3 className="font-heading text-lg font-semibold text-primary mb-6">
                  Central Orbit Direct B2C Channel
                </h3>
                <ul className="space-y-4">
                  {[
                    "You retain full brand architecture, story and pricing control",
                    "Our team operates the channel on your behalf",
                    "Campaign calendar and platform focus agreed in advance",
                    "Consumer data, reviews and CRM become your assets",
                    "Volume growth tied to a clear 3-year plan",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-text-light leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="A Complete China Operation. Run by Us. Owned by You."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {whatWeBuild.map((item, i) => (
              <FadeIn key={item.title} delay={Math.min(i * 0.08, 0.4)}>
                <div className="bg-white rounded-lg p-6 border border-border h-full">
                  <h3 className="font-heading text-base font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-light leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Three Year Path */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Validate. Scale. Operate." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {years.map((year, i) => (
              <FadeIn key={year.title} delay={i * 0.1}>
                <div className="bg-surface rounded-lg p-6 border border-border h-full">
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {year.label}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-text mt-1">
                    {year.title}
                  </h3>
                  <p className="mt-4 text-sm text-text-light leading-relaxed">
                    {year.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-8 text-sm text-text-light max-w-2xl leading-relaxed italic">
              Timeline from assessment to first sale is typically 12 to 18
              months. China is a strategic investment, not a marketing sprint.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="We Are Selective by Design." />
          <FadeIn>
            <div className="max-w-2xl space-y-4 text-text-light leading-relaxed">
              <p>
                We work with a maximum of ten skincare brands at any time. Each
                engagement is a full operational partnership, not a consulting
                retainer. We currently have capacity for three to four new
                brands.
              </p>
              <p>
                The brands we take on have a strong product, a defensible
                ingredient story, an established home market and management that
                understands China requires patience and long-term commitment. If
                you are looking for quick results, we are not the right partner.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Start with a Conversation." />
          <FadeIn>
            <div className="max-w-2xl space-y-4 text-text-light leading-relaxed">
              <p>
                We begin every engagement with an honest assessment of whether
                your brand is ready for China and whether we are the right
                partner for each other. There is no cost to that conversation.
              </p>
              <p>
                To start,{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary-dark transition-colors underline underline-offset-2"
                >
                  contact us here
                </Link>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
