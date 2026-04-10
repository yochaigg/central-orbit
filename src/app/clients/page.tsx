import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { CLIENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Trusted by multinational corporations and industry associations across the globe.",
};

export default function ClientsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              Clients
            </h1>
            <div className="mt-3 w-16 h-1 bg-primary rounded-full" />
          </FadeIn>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Trusted By"
            subtitle="Our multinational and Chinese clients choose to work with us because we deliver practical results."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {CLIENTS.map((client, i) => (
              <FadeIn key={client.name} delay={i * 0.1}>
                <div className="flex items-center justify-center h-28 bg-surface rounded-lg border border-border px-6 grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="font-heading font-bold text-text-light text-center text-sm leading-tight">
                    {client.name}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.5}>
            <p className="mt-12 text-center text-text-light text-sm">
              And many more across telecommunications, technology, cosmetics,
              and public sector industries.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
