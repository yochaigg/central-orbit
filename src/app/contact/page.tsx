import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { OFFICES } from "@/lib/constants";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Central Orbit.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              Contact
            </h1>
            <div className="mt-3 w-16 h-1 bg-primary rounded-full" />
          </FadeIn>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                Get in Touch
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <a
                href="mailto:info@central-orbit.com"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface px-6 py-5 text-lg font-medium text-text transition-colors hover:border-primary hover:text-primary hover:bg-primary/5"
              >
                <Mail className="text-primary" size={21} strokeWidth={1.5} />
                info@central-orbit.com
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-12">
              Our Offices
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {OFFICES.map((office, i) => (
              <FadeIn key={office.city} delay={i * 0.15}>
                <div className="bg-white rounded-lg p-8 border border-border">
                  <h3 className="font-heading text-xl font-semibold text-text mb-4">
                    {office.city}
                  </h3>
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="text-primary mt-0.5 shrink-0"
                      size={18}
                      strokeWidth={1.5}
                    />
                    <div className="text-sm text-text-light leading-relaxed">
                      {office.address.map((line, j) => (
                        <p key={j}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
