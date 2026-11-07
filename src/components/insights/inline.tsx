import Link from "next/link";
import { parseInline } from "@/content/insights/inline";

export function Inline({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((t, i) => {
        switch (t.t) {
          case "text":
            return <span key={i}>{t.v}</span>;
          case "bold":
            return <strong key={i} className="font-semibold text-text">{t.v}</strong>;
          case "cite":
            return (
              <sup key={i} className="ml-0.5 text-xs">
                <a href={`#source-${t.n}`} aria-label={`Source ${t.n}`} className="text-secondary underline-offset-2 hover:underline">
                  [{t.n}]
                </a>
              </sup>
            );
          case "link":
            return t.href.startsWith("/") ? (
              <Link key={i} href={t.href} className="text-secondary underline underline-offset-2 hover:text-primary">
                {t.label}
              </Link>
            ) : (
              <a key={i} href={t.href} target="_blank" rel="noopener noreferrer" className="text-secondary underline underline-offset-2 hover:text-primary">
                {t.label}
              </a>
            );
        }
      })}
    </>
  );
}
