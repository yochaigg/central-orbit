import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { ABOUT, SERVICES, STATS } from "@/lib/constants";
import {
  TrendingUp,
  Landmark,
  Globe,
  CalendarDays,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Since 1998, Central Orbit has helped companies navigate cross-cultural business in the APAC region.",
};

const serviceIcons = {
  TrendingUp,
  Landmark,
  Globe,
  CalendarDays,
} as const;

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              About
            </h1>
            <div className="mt-3 w-16 h-1 bg-primary rounded-full" />
          </FadeIn>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl space-y-6">
            {ABOUT.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="text-text-light leading-relaxed text-lg">{p}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center py-8">
                  <p className="font-heading text-4xl md:text-5xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-text-light font-medium">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Services"
            subtitle="End-to-end support for companies doing business across borders."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => {
              const Icon =
                serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <FadeIn key={service.title} delay={i * 0.1}>
                  <div className="bg-surface rounded-lg p-8 border border-border">
                    <Icon
                      className="text-primary mb-4"
                      size={28}
                      strokeWidth={1.5}
                    />
                    <h3 className="font-heading text-lg font-semibold text-text">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
