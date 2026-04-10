import { FadeIn } from "./fade-in";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <FadeIn className="mb-12">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text">
        {title}
      </h2>
      <div className="mt-3 w-16 h-1 bg-primary rounded-full" />
      {subtitle && (
        <p className="mt-4 text-text-light text-lg max-w-2xl">{subtitle}</p>
      )}
    </FadeIn>
  );
}
