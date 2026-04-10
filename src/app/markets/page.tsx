import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { MARKETS } from "@/lib/constants";
import {
  Radio,
  Smartphone,
  Cpu,
  AppWindow,
  Monitor,
  FlaskConical,
  Sparkles,
  Shirt,
  Wheat,
  Heart,
  ShieldCheck,
  Shield,
  Recycle,
  Lock,
  Droplets,
  Plane,
  Zap,
  Circle,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>> = {
  Radio, Smartphone, Cpu, AppWindow, Monitor, FlaskConical,
  Sparkles, Shirt, Wheat, Heart, ShieldCheck, Shield,
  Recycle, Lock, Droplets, Plane, Zap, Circle,
};

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Central Orbit provides services across 17+ industries including telecommunications, technology, cosmetics, and renewable energy.",
};

export default function MarketsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              Markets
            </h1>
            <div className="mt-3 w-16 h-1 bg-primary rounded-full" />
          </FadeIn>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Industries We Serve"
            subtitle="We provide services across a wide range of sectors, with deep expertise in each."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MARKETS.map((market, i) => {
              const Icon = iconMap[market.icon] ?? Circle;
              return (
                <FadeIn key={market.name} delay={Math.min(i * 0.05, 0.4)}>
                  <div className="group flex items-center gap-4 bg-surface rounded-lg px-6 py-5 border border-border hover:border-primary/30 hover:shadow-sm transition-all">
                    <Icon
                      className="text-primary shrink-0"
                      size={24}
                      strokeWidth={1.5}
                    />
                    <span className="text-text font-medium text-sm group-hover:text-primary transition-colors">
                      {market.name}
                    </span>
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
