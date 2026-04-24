import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skincare Brand China Market Entry — Central Orbit",
  description:
    "Central Orbit helps independent Western skincare brands establish their own commercial presence in the Chinese market — from regulatory approval to launch and ongoing management.",
  openGraph: {
    title: "Skincare Brand China Market Entry — Central Orbit",
    description:
      "A structured, managed approach to China market entry for independent Western skincare brands.",
  },
};

const steps = [
  { title: "Brand Assessment", body: "We evaluate your brand, product range, pricing, positioning and overall readiness for the Chinese market. We provide an honest assessment of your strengths, gaps and the most appropriate entry route for your specific situation." },
  { title: "Regulatory Approvals", body: "We guide you through the Chinese regulatory requirements applicable to your product range and manage the approval process, ensuring your products meet all necessary compliance standards before entering the market." },
  { title: "Legal and Financial Structure", body: "We advise on the appropriate legal and financial structure for your China operations, including entity setup, commercial agreements and financial flows between your home market and China." },
  { title: "Channel Setup", body: "We design and establish your brand's own commercial channels in China, ensuring you maintain full control over your pricing, positioning and customer relationships. Where relevant, introductions to market partners are made as part of the broader channel strategy." },
  { title: "Launch Planning and Sales Strategy", body: "We develop your go-to-market plan, sales strategy and campaign structure, ensuring your brand launches with commercial momentum and clear revenue targets from day one." },
  { title: "Platform Activation", body: "We identify and set up the right Chinese retail and digital platforms for your brand and oversee the full launch process." },
  { title: "Ongoing Management", body: "We support your China operations on an ongoing basis, managing platform performance, partner relationships and market development." },
];

const scope = [
  "Brand assessment and market readiness evaluation",
  "Regulatory approval and compliance management",
  "Legal structure and entity setup advisory",
  "Financial structure and cross-border payment setup",
  "Channel strategy and owned distribution model setup",
  "Introduction to relevant market partners as part of the broader entry strategy",
  "Launch planning and go-to-market execution",
  "Sales strategy and revenue model design",
  "Campaign structure and digital marketing activation",
  "Platform setup and product listing",
  "Brand messaging adaptation for Chinese consumers",
  "Ongoing channel and platform management",
];

export default function SkincarePage() {
  return (
    <main>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-600">
            Service
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Skincare Brand China Market Entry
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-700">
            <p>
              Central Orbit helps independent Western skincare brands establish
              their own commercial presence in the Chinese market. We work with
              founder-led brands ready to expand beyond their home market and
              looking for a structured, managed approach to China entry.
            </p>
            <p>
              Our work covers the full process — from initial brand assessment
              through to regulatory approval, legal and financial structuring,
              owned channel setup, launch planning and ongoing commercial
              management. The goal is always for our clients to own and control
              their China presence independently.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Our Approach
          </h2>
          <ol className="mt-10 space-y-8">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-semibold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-700">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Scope of Service
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {scope.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-gray-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
