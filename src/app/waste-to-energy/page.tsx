import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Flame,
  Leaf,
  Factory,
  Zap,
  ArrowRight,
  Droplets,
  Wind,
  Trash2,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Waste to Energy",
  description:
    "Central Orbit delivers advanced gasification solutions that convert municipal solid waste into clean energy — with near-zero landfill and minimal emissions.",
};

const advantages = [
  {
    icon: Leaf,
    title: "Near-Zero Landfill",
    text: "Less than 2% of processed material goes to landfill — far below the industry benchmark.",
  },
  {
    icon: Wind,
    title: "Minimal Emissions",
    text: "Advanced gasification operates well within the strictest EU and US emission standards, with no combustion byproducts released into the atmosphere.",
  },
  {
    icon: Zap,
    title: "High Energy Output",
    text: "Significantly more electricity generated per ton of waste compared to conventional mass-burn incineration.",
  },
  {
    icon: Factory,
    title: "Lower Capital & Operating Costs",
    text: "Competitive project costs with substantially lower annual operating expenses than traditional waste-to-energy plants.",
  },
  {
    icon: Trash2,
    title: "Omnivorous Feedstock",
    text: "Handles mixed municipal waste, biomass, and high-moisture content materials — no pre-drying required.",
  },
  {
    icon: Droplets,
    title: "Clean Byproducts",
    text: "Produces clean syngas and non-toxic ash. No sulfur, no soot, and water output meets discharge standards.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Collection & Sorting",
    text: "Single-bin collection eliminates the need for complex source separation. Automated sorting handles the rest.",
  },
  {
    step: "02",
    title: "Advanced Gasification",
    text: "Waste is converted through a high-temperature thermochemical process — not burning — into synthetic gas (syngas).",
  },
  {
    step: "03",
    title: "Energy Generation",
    text: "Clean syngas powers turbines to generate electricity, feeding directly into the local grid.",
  },
  {
    step: "04",
    title: "Clean Output",
    text: "Residual ash is inert and non-toxic. No harmful emissions. Water byproduct meets environmental standards.",
  },
];

export default function WasteToEnergyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <Flame className="text-primary" size={32} strokeWidth={1.5} />
              <span className="text-sm font-medium text-text-light uppercase tracking-wider">
                Since 2019
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              Waste to Energy
            </h1>
            <div className="mt-3 w-16 h-1 bg-primary rounded-full" />
            <p className="mt-6 text-text-light text-lg max-w-2xl leading-relaxed">
              Since 2019, Central Orbit has been engaged with leading technology
              providers in the design and deployment of waste-to-energy
              solutions, with a focus on advanced gasification systems.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="The Challenge"
            subtitle="Municipal solid waste is one of the most pressing environmental issues worldwide."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <FadeIn>
              <p className="text-text-light leading-relaxed">
                Waste volumes are growing in every major economy. Landfill
                capacity is shrinking. Conventional incineration carries high
                capital costs, produces harmful particulate matter, and operates
                at relatively low energy efficiency.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed">
                Source separation programs are expensive and inconsistent.
                Recycling alone cannot close the gap — many common materials
                like diapers, composite cartons, and contaminated plastics
                simply cannot be recycled effectively.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Our Approach"
            subtitle="Advanced gasification — not incineration — turns waste into clean energy."
          />
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-text-light leading-relaxed mb-4">
                Gasification is a high-temperature thermochemical process that
                converts organic materials into synthetic gas (syngas) without
                combustion. Unlike incineration, there is no open burning — and
                therefore no burning-related pollution released into the air.
              </p>
              <p className="text-text-light leading-relaxed">
                The resulting syngas is a clean fuel that can generate
                electricity, produce hydrogen, or replace natural gas in
                industrial applications. The process handles more than 75% of
                typical municipal solid waste and produces significantly higher
                energy yields than conventional approaches.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="How It Works" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="relative bg-surface rounded-lg p-6 border border-border h-full">
                  <span className="font-heading text-3xl font-bold text-primary/20">
                    {step.step}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-text mt-2">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-light leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Why Advanced Gasification"
            subtitle="Measurable advantages over landfill, incineration, and pyrolysis."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <FadeIn key={item.title} delay={Math.min(i * 0.08, 0.4)}>
                <div className="bg-white rounded-lg p-6 border border-border h-full">
                  <item.icon
                    className="text-primary mb-3"
                    size={26}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-heading text-base font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Syngas Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Clean Syngas Output" />
          <div className="max-w-3xl">
            <FadeIn>
              <ul className="space-y-3">
                {[
                  "No sulfur content — burns clean without acid-gas scrubbing",
                  "Non-explosive — safe for storage and transport",
                  "Compatible with existing natural gas infrastructure",
                  "No soot or particulate matter during combustion",
                  "Emissions consistently below 10% of regulatory limits",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-primary mt-0.5 shrink-0"
                      size={18}
                      strokeWidth={1.5}
                    />
                    <span className="text-text-light text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <FadeIn>
            <Flame
              className="mx-auto text-primary mb-4"
              size={36}
              strokeWidth={1.5}
            />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text">
              Interested in waste-to-energy solutions?
            </h2>
            <p className="mt-3 text-text-light max-w-lg mx-auto">
              Whether you represent a municipality, developer, or investor —
              we&apos;d welcome the conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors mt-6"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
