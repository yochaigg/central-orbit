import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "China Skincare Market Entry & Growth",
  description:
    "Commercial research and China market planning for established overseas skincare brands entering China or looking to grow there. Free Shelf Test, Opportunity Assessment and Launch Blueprint.",
  openGraph: {
    title: "China Skincare Market Entry & Growth | Central Orbit",
    description:
      "From product positioning to channels and practical next steps. China skincare research and planning for overseas brands entering or growing in China.",
    type: "website",
    locale: "en_US",
    siteName: "Central Orbit",
    url: "https://www.central-orbit.com/skincare",
    images: "/opengraph-image",
  },
  alternates: { canonical: "/skincare" },
};

const questions = [
  {
    num: "01",
    heading: "Why would someone choose your product?",
    body: "Start with the product, the people who buy it today, its strengths and the proof supporting its benefits.",
  },
  {
    num: "02",
    heading: "What would it compete against?",
    body: "Understand relevant alternatives already offered in China, their visible claims, positioning and listed prices.",
  },
  {
    num: "03",
    heading: "How would customers find and buy it?",
    body: "Look at possible online B2C routes, operating requirements, fulfillment and the costs of making them work.",
  },
];

export default function SkincarePage() {
  return (
    <>
      <section className="bg-[#fff7f0] pt-28 pb-18 lg:pt-36 lg:pb-24 border-b border-[#e9d8d5]">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.19em] text-[#9a5269] mb-6">
              Central Orbit / China skincare
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.08] text-[#3c2d3e] max-w-4xl">
              China skincare is crowded.
              <span className="block italic text-[#a85270] mt-2">
                Your next move should be deliberate.
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[#5e4c5b] max-w-3xl leading-relaxed">
              There may be room for your skincare brand in China. The useful question
              is how to compete: which products, which consumers, which channels
              and what preparation would make commercial sense.
            </p>
            <p className="mt-4 text-base text-[#665866] max-w-3xl leading-relaxed">
              We help established overseas skincare brands explore a first move
              into China or improve an existing presence, using focused research
              and practical commercial planning.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/china-skincare-guides/shelf/"
                className="inline-flex items-center gap-2 rounded-md bg-[#a44c6a] hover:bg-[#883954] text-white px-6 py-3 font-semibold text-sm transition-colors"
              >
                Try the free Shelf Test <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/china-skincare-guides/brand-review/"
                className="inline-flex items-center gap-2 rounded-md border border-[#bc909e] text-[#643f54] hover:bg-white px-6 py-3 font-semibold text-sm transition-colors"
              >
                Explore our services <ArrowRight size={17} />
              </Link>
            </div>
            <p className="mt-4 text-xs text-[#76646f]">
              Eight questions. About three minutes. No sign-up or email required for the free test.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-18 lg:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a15571] mb-3">
              Who we work with
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#3d2e3f] tracking-tight max-w-3xl">
              Different starting points. The same need for clarity.
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="border-t-2 border-[#bd788e] pt-6 pr-4">
                <h3 className="font-serif text-2xl text-[#422f42]">
                  Considering China?
                </h3>
                <p className="mt-4 text-[#625463] leading-relaxed">
                  Before investing in a launch, examine your lead products,
                  differentiated benefits, relevant competitors, likely pricing
                  and possible routes to consumers.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border-t-2 border-[#b7a0c8] pt-6 pr-4">
                <h3 className="font-serif text-2xl text-[#422f42]">
                  Already selling in China?
                </h3>
                <p className="mt-4 text-[#625463] leading-relaxed">
                  Reassess positioning, channels, competing products and
                  commercial priorities. The next opportunity might come from
                  improving what is already there, not starting again.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-18 lg:py-24 bg-[#faf4f5]">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a15571] mb-3">
              From possibility to evidence
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#3d2e3f] tracking-tight">
              Three questions worth answering.
            </h2>
            <p className="mt-4 text-[#635664] max-w-3xl leading-relaxed">
              A promising product alone is not a market-entry strategy. These
              are some of the decisions we help brands examine.
            </p>
          </FadeIn>
          <div className="mt-10 border-t border-[#e3ced4]">
            {questions.map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-[70px_1fr_1.15fr] md:gap-8 gap-3 py-7 border-b border-[#e3ced4]">
                  <span className="font-serif text-xl italic text-[#a15571]">{item.num}</span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#3f3040]">
                    {item.heading}
                  </h3>
                  <p className="text-[#635664] leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 lg:py-24 bg-white" id="next-steps">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a15571] mb-3">
              Choose how far to go
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#3d2e3f] tracking-tight">
              Start with a question. Leave with a clearer direction.
            </h2>
            <p className="mt-4 text-[#665866] max-w-3xl leading-relaxed">
              Our services build on the same principle as the free Shelf Test:
              start with your products and the decisions you actually need to make.
            </p>
          </FadeIn>
          <div className="mt-12 space-y-0 border-t border-[#e9d6d8]">
            <div className="py-9 border-b border-[#e9d6d8] grid grid-cols-1 lg:grid-cols-[1fr_1.25fr_auto] gap-5 items-start">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#a15571] mb-2">First look / Free</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#3d2e3f]">Skincare Shelf Test</h3>
              </div>
              <p className="text-[#635664] leading-relaxed">
                Eight questions about your product foundations, with immediate
                notes and practical starting points. A self-assessment, not a
                prediction of sales or market readiness.
              </p>
              <Link href="/china-skincare-guides/shelf/" className="text-sm font-semibold text-[#9a4868] inline-flex items-center gap-2 hover:underline whitespace-nowrap">
                Take the test <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="py-9 border-b border-[#e9d6d8] grid grid-cols-1 lg:grid-cols-[1fr_1.25fr_auto] gap-5 items-start">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#a15571] mb-2">Research / US$950</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#3d2e3f]">Opportunity Assessment</h3>
              </div>
              <p className="text-[#635664] leading-relaxed">
                A sourced review of your products, up to five relevant China-market
                alternatives, price positioning, risks and recommended next decisions.
              </p>
              <Link href="/china-skincare-guides/brand-review/#assessment" className="text-sm font-semibold text-[#9a4868] inline-flex items-center gap-2 hover:underline whitespace-nowrap">
                See the scope <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="py-9 border-b border-[#e9d6d8] grid grid-cols-1 lg:grid-cols-[1fr_1.25fr_auto] gap-5 items-start">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#a15571] mb-2">Planning / US$4,500</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#3d2e3f]">Launch Blueprint</h3>
              </div>
              <p className="text-[#635664] leading-relaxed">
                Deeper competitive research, B2C channel and platform choices,
                logistics and regulatory preparation, cost categories and a phased
                launch or growth roadmap.
              </p>
              <Link href="/china-skincare-guides/brand-review/#blueprint" className="text-sm font-semibold text-[#9a4868] inline-flex items-center gap-2 hover:underline whitespace-nowrap">
                See the scope <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <p className="mt-7 text-sm text-[#70616e] leading-relaxed max-w-4xl">
            The paid services are research-led commercial work, not a promise of
            market success, regulatory approval or operating an online store.
            Once payment is confirmed, clients receive a private Calendly link
            for their project discussion.
          </p>
        </div>
      </section>

      <section className="bg-[#423145] py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl max-w-3xl leading-tight">
              A better China decision starts with the right questions.
            </h2>
            <p className="mt-5 max-w-3xl text-[#f0e2e9] leading-relaxed">
              Whether you are considering the market or already working in it,
              your brand deserves a commercially grounded next step.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/china-skincare-guides/shelf/" className="inline-flex gap-2 items-center px-6 py-3 bg-[#f7d5df] text-[#432b40] font-semibold rounded-md hover:bg-white transition-colors">
                Start with the free test <ArrowRight size={17} />
              </Link>
              <a href="mailto:info@central-orbit.com?subject=China%20Skincare%20Market%20Inquiry" className="inline-flex gap-2 items-center px-6 py-3 border border-[#ead4de] text-white font-semibold rounded-md hover:bg-[#5b415a] transition-colors">
                Ask about your situation <ArrowUpRight size={17} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
