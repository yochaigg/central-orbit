import type { Block } from "@/content/insights/types";
import { plainText } from "@/content/insights/inline";
import { slugifyHeading } from "@/lib/format";
import { Inline } from "./inline";

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 text-lg leading-relaxed text-text">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} id={slugifyHeading(plainText(b.text))} className="scroll-mt-24 pt-6 font-heading text-2xl font-bold text-primary md:text-3xl">
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} id={slugifyHeading(plainText(b.text))} className="scroll-mt-24 pt-2 font-heading text-xl font-semibold text-text">
                {b.text}
              </h3>
            );
          case "p":
            return <p key={i}><Inline text={b.text} /></p>;
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6">
                {b.items.map((it, j) => <li key={j}><Inline text={it} /></li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-2 pl-6">
                {b.items.map((it, j) => <li key={j}><Inline text={it} /></li>)}
              </ol>
            );
          case "callout":
            return (
              <aside key={i} className="rounded-lg border-l-4 border-primary bg-surface p-5 text-base">
                {b.title ? <p className="mb-1 font-heading font-semibold text-text">{b.title}</p> : null}
                <p><Inline text={b.text} /></p>
              </aside>
            );
          case "table":
            return (
              <div key={i} className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
                <table className="w-full min-w-[32rem] border-collapse text-left text-base">
                  {b.caption ? <caption className="pb-2 text-left text-sm text-text-light">{b.caption}</caption> : null}
                  <thead>
                    <tr>
                      {b.headers.map((h, j) => (
                        <th key={j} scope="col" className="border-b-2 border-border bg-surface px-3 py-2 font-heading text-sm font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td key={k} className="border-b border-border px-3 py-2 align-top"><Inline text={c} /></td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
