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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Latin America",
  description:
    "Central Orbit connects international companies to capital, markets, and opportunity across Latin America, from a stable base in Uruguay.",
};

const services = [
  {
    title: "Capital and Investors",
    description:
      "Access to local capital and investors actively seeking strong international opportunities.",
    icon: Globe,
  },
  {
    title: "Local Marketing",
    description:
      "Marketing and promotion inside the local market, in the local language, by local people who know it.",
    icon: Users,
  },
  {
    title: "Setup and Entry",
    description:
      "Support through fundraising, legal entity formation, and market entry, end to end.",
    icon: Building2,
  },
  {
    title: "Network",
    description:
      "An established business network that would take years to build on your own.",
    icon: Network,
  },
  {
    title: "Remote by Design",
    description: "Everything can be managed remotely. No relocation required.",
    icon: MapPin,
  },
];

const markets = [
  {
    name: "Brazil",
    description:
      "The flagship market. The largest economy in the region and one of the world's most important manufacturing and industrial hubs, with room to scale.",
  },
  {
    name: "Argentina",
    description:
      "A large, high-potential market with exceptional technical talent and deep, well-connected business communities.",
  },
];

export default function LatamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Hero Background: Montevideo photo with warm overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/MVD.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Warm gradient overlay for readability and warmth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-accent/30 z-0" />

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
              Your Gateway to Latin America
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-xl md:text-2xl text-white font-light max-w-2xl">
              Central Orbit connects international companies to capital, markets,
              and opportunity across Latin America, from a stable base in Uruguay.
            </p>
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
                  A region on the rise
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                Latin America is a market of more than 400 million people with a
                fast-growing appetite for foreign technology and innovation. It
                is one of the world's most promising and comparatively untapped
                regions, open to exactly what strong international companies
                offer. Getting there early, with the right local partners, is the
                advantage.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Uruguay */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-accent/15">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  Uruguay as the base
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                We operate from Uruguay because it is the region's safest point
                of entry. One of Latin America's most stable economies, with a
                strong democracy and genuine regulatory certainty. Sensible
                taxation and established free trade zones make international
                operations straightforward. And its stability and openness place
                it well away from the political noise found in other markets. It
                is the foundation from which everything else becomes reachable.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Regional Markets */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-white">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                From one base, a continent
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-8 max-w-3xl">
            {markets.map((market, i) => (
              <FadeIn key={market.name} delay={i * 0.1}>
                <div className="border-l-4 border-gradient-to-b from-accent to-primary bg-gradient-to-r from-accent/10 to-transparent pl-6 py-4 rounded-r-lg">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                    {market.name}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {market.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <p className="mt-10 text-text-light leading-relaxed text-lg max-w-3xl font-medium">
              From our Uruguay base, Central Orbit gives you reach into both, and
              into the wider Latin American region.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-b from-primary/8 to-accent/10">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                What we do
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

      {/* Bridge Built on Real Networks */}
      <section className="py-16 bg-gradient-to-b from-white to-primary/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  A bridge built on real networks
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                Central Orbit's advantage is relationships that don't exist on
                paper. We are deeply connected to the region's Jewish and Israeli
                business communities, among the most established and
                internationally minded networks in Latin America, giving our
                partners a level of access, trust, and local capital that is
                genuinely hard to replicate. We have a particular strength working
                with Israeli technology companies, and that same infrastructure
                opens doors for ambitious companies from anywhere.
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
                  Who we work with
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-light leading-relaxed text-lg">
                Companies with genuine international logic, from early revenue
                through growth stage, ready to open a new market without stepping
                away from the business they have built at home.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Relocation */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-white">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="max-w-3xl border-l-4 border-primary pl-6 py-2">
              <p className="text-text-light leading-relaxed italic">
                And for companies or founders who do choose to relocate, we
                support the full process, from visa and residency to housing,
                schooling, and settling into the community.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-b from-primary/10 via-accent/8 to-primary/5">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Let's talk
            </h2>
            <p className="text-text-light text-lg mb-8 max-w-2xl mx-auto">
              If Latin America is on your horizon, we should talk.
            </p>
            <Link
              href="mailto:info@central-orbit.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-md font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </FadeIn>

          {/* Uruguay Office */}
          <FadeIn delay={0.2}>
            <div className="mt-16 max-w-2xl mx-auto bg-white/50 backdrop-blur rounded-lg p-8 border border-accent/20">
              <p className="text-sm font-semibold text-primary mb-2">
                MONTEVIDEO OFFICE
              </p>
              <p className="text-text-light">2087 Bv. España 1087</p>
              <p className="text-text-light mt-1">
                <a
                  href="mailto:info@central-orbit.com"
                  className="hover:text-primary transition-colors"
                >
                  info@central-orbit.com
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
