import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import {
  CircleDot,
  ArrowRight,
  Globe,
  Calendar,
  TrendingUp,
  Users,
} from "lucide-react";

const quickNav = [
  {
    title: "How We Help",
    description: "Assessment, market entry, channels and commercial execution in China.",
    href: "/about#services",
    icon: TrendingUp,
  },
  {
    title: "Experience",
    description: "Selected organizations and international commercial experience.",
    href: "/clients",
    icon: CircleDot,
  },
  {
    title: "Industries",
    description: "Relevant experience across industrial, technical and consumer markets.",
    href: "/markets",
    icon: Globe,
  },
  {
    title: "Contact Us",
    description: "Discuss an active or unresolved China commercial question.",
    href: "/contact",
    icon: Calendar,
  },
];

const valueProps = [
  {
    icon: Calendar,
    value: "20+ Years",
    text: "International business development and commercial growth experience.",
  },
  {
    icon: Globe,
    value: "China Expertise",
    text: "Customers, distributors, channels and strategic partnerships.",
  },
  {
    icon: Users,
    value: "Local Capability",
    text: "Trusted relationships and operational support inside China.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <div className="w-9 h-9 border-[3px] border-white rounded-full" />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight">
              CHINA, IN PRACTICE
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-xl md:text-2xl text-text-light font-light">
              Commercial work for Western companies.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-6 text-text-light max-w-xl leading-relaxed">
              We work with companies entering China, already operating there,
              or reconsidering an approach that has not worked. The focus is
              practical: customers, channels, partners and the decisions behind them.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="mailto:yochai.golan@central-orbit.com"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
              >
                Email Central Orbit
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about#services"
                className="inline-flex items-center gap-2 border border-border text-text px-6 py-3 rounded-md font-medium hover:border-primary hover:text-primary transition-colors"
              >
                How We Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {valueProps.map((prop, i) => (
              <FadeIn key={prop.value} delay={i * 0.1}>
                <div className="text-center">
                  <prop.icon className="mx-auto text-primary mb-4" size={32} strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-bold text-text">{prop.value}</h3>
                  <p className="mt-2 text-sm text-text-light">{prop.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text text-center mb-12">How We Help</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickNav.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <Link href={card.href} className="group block bg-white rounded-lg p-6 shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all">
                  <card.icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
                  <h3 className="font-heading font-semibold text-text group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="mt-2 text-sm text-text-light leading-relaxed">{card.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">Learn more <ArrowRight size={14} /></span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
