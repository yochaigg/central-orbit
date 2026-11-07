import type { Metadata } from "next";
import Link from "next/link";
import {
  CLUSTER_IDS,
  CLUSTERS,
  getPublishedArticles,
  getRoutableArticles,
  readingMinutes,
} from "@/content/insights";
import { formatDate } from "@/lib/format";
import { jsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/constants";

const title = "Insights";
const description =
  "Practical answers for skincare executives weighing Latin America or China: market entry, regulation, channels and distributors. Each article names its author and sources.";

export function generateMetadata(): Metadata {
  const hasContent = getPublishedArticles().length > 0;
  return {
    title,
    description,
    alternates: { canonical: "/insights" },
    // An empty hub is a thin page. It becomes indexable when the first article is published.
    robots: hasContent ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: `${SITE.url}/insights`,
      type: "website",
      locale: "en_US",
      siteName: SITE.name,
    },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE.name}`, description },
  };
}

export default function InsightsPage() {
  const articles = getRoutableArticles();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE.url}/insights#page`,
        url: `${SITE.url}/insights`,
        name: `${title} | ${SITE.name}`,
        description,
        isPartOf: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE.url}/insights` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <section className="bg-surface pb-12 pt-28 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="font-heading text-4xl font-bold text-primary md:text-5xl">Insights</h1>
          <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text">
            Practical answers for skincare executives weighing Latin America or China. Each article
            addresses one business question, names its author and lists its sources.
          </p>
          {articles.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-3 text-sm">
              {CLUSTER_IDS.filter((id) => articles.some((a) => a.cluster === id)).map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="inline-block rounded-full border border-border bg-white px-4 py-2 font-medium text-text hover:border-primary hover:text-primary">
                    {CLUSTERS[id].label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          {articles.length === 0 ? (
            <p className="text-text-light">No articles are published yet.</p>
          ) : (
            CLUSTER_IDS.map((id) => {
              const list = articles.filter((a) => a.cluster === id);
              if (list.length === 0) return null;
              return (
                <div key={id} id={id} className="mb-14 scroll-mt-24 last:mb-0">
                  <h2 className="font-heading text-2xl font-bold text-text">{CLUSTERS[id].label}</h2>
                  <p className="mt-2 max-w-2xl text-text-light">{CLUSTERS[id].description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {list.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/insights/${a.slug}`} className="block h-full rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary">
                          {a.status === "draft" ? (
                            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Draft preview</p>
                          ) : null}
                          <h3 className="font-heading text-xl font-semibold text-text">{a.title}</h3>
                          <p className="mt-3 text-text-light">{a.businessQuestion}</p>
                          <p className="mt-4 text-sm text-text-light">
                            {formatDate(a.datePublished)} · {readingMinutes(a)} min read
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
}
