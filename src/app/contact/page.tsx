import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { OFFICES } from "@/lib/constants";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Central Orbit. Offices in Beijing and London.",
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

      {/* Form + Offices */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Direct Contact */}
            <div>
              <SectionHeading
                title="Start With an Email"
                subtitle="Tell us briefly what your company does, where you operate, and what is happening in China. If the situation is relevant to our work, we will arrange a conversation."
              />
              <FadeIn>
                <a
                  href="mailto:yochai.golan@central-orbit.com"
                  className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface px-6 py-5 text-lg font-medium text-text transition-colors hover:border-primary hover:text-primary"
                >
                  <Mail className="text-primary" size={21} strokeWidth={1.5} />
                  yochai.golan@central-orbit.com
                </a>
              </FadeIn>
            </div>

            {/* Office Locations */}
            <div>
              <SectionHeading title="Our Offices" />
              <div className="space-y-8">
                {OFFICES.map((office, i) => (
                  <FadeIn key={office.city} delay={i * 0.15}>
                    <div className="bg-surface rounded-lg p-6 border border-border">
                      <h3 className="font-heading text-xl font-semibold text-text mb-4">
                        {office.city} Office
                      </h3>
                      <div className="flex items-start gap-3 mb-3">
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
                      <div className="flex items-center gap-3">
                        <Phone
                          className="text-primary shrink-0"
                          size={18}
                          strokeWidth={1.5}
                        />
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          className="text-sm text-text-light hover:text-primary transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
