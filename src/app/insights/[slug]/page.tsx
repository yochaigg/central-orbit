import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CLUSTERS,
  EMPTY_SLUG,
  getArticle,
  getRelated,
  getStaticSlugs,
  readingMinutes,
} from "@/content/insights";
import { AUTHORS } from "@/content/insights/authors";
import { CONTACT_EMAIL, SERVICE_LINK_ROUTES } from "@/content/insights/config";
import { plainText } from "@/content/insights/inline";
import { ArticleBody } from "@/components/insights/article-body";
import { ArticleViewTracker } from "@/components/insights/article-tracker";
import { formatDate, slugifyHeading } from "@/lib/format";
import { jsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticSlugs();
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === EMPTY_SLUG) {
    return { title: "Insights", alternates: { canonical: "/insights" }, robots: { index: false, follow: false } };
  }
  const a = getArticle(slug);
  if (!a) return {};
  const url = `${SITE.url}/insights/${a.slug}`;
  const author = AUTHORS[a.author];
  const metaTitle = a.seoTitle ?? a.title;
  return {
    title: metaTitle,
    description: a.description,
    alternates: { canonical: `/insights/${a.slug}` },
    robots: a.status === "published" ? { index: true, follow: true } : { index: false, follow: false },
    authors: [{ name: author.name }],
    openGraph: {
      type: "article",
      title: `${metaTitle} | ${SITE.name}`,
      description: a.description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      publishedTime: a.datePublished,
      modifiedTime: a.dateModified,
      authors: [author.name],
      section: CLUSTERS[a.cluster].label,
    },
    twitter: {
      card: "summary_large_image",
      title: `${metaTitle} | ${SITE.name}`,
      description: a.description,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  if (slug === EMPTY_SLUG) {
    return (
      <section className="bg-surface pb-16 pt-28 lg:pt-36">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-3xl font-bold text-text">No articles published yet</h1>
          <p className="mt-4 text-text-light">
            <Link href="/insights" className="text-secondary underline">Back to Insights</Link>
          </p>
        </div>
      </section>
    );
  }
  const a = getArticle(slug);
  if (!a) notFound();

  const author = AUTHORS[a.author];
  const cluster = CLUSTERS[a.cluster];
  const url = `${SITE.url}/insights/${a.slug}`;
  const related = getRelated(a);
  const toc = a.body.filter((b) => b.type === "h2").map((b) => ({
    text: plainText(b.text),
    id: slugifyHeading(plainText(b.text)),
  }));
  const isDraft = a.status === "draft";
  const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(a.cta.emailSubject)}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: a.title,
        description: a.description,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        datePublished: a.datePublished,
        dateModified: a.dateModified,
        inLanguage: "en",
        articleSection: cluster.label,
        author: { "@id": `${SITE.url}/#person-yochai-golan` },
        publisher: { "@id": `${SITE.url}/#organization` },
        citation: a.sources.map((s) => ({
          "@type": "CreativeWork",
          name: s.title,
          url: s.url,
          publisher: { "@type": "Organization", name: s.publisher },
        })),
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person-yochai-golan`,
        name: author.name,
        jobTitle: author.jobTitle,
        worksFor: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE.url}/insights` },
          { "@type": "ListItem", position: 3, name: a.title, item: url },
        ],
      },
    ],
  };

  return (
    <article {...(isDraft ? { "data-insights-draft": "true" } : {})}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <ArticleViewTracker slug={a.slug} cluster={a.cluster} />

      <header className="bg-surface pb-10 pt-28 lg:pb-14 lg:pt-36">
        <div className="mx-auto max-w-3xl px-6">
          {isDraft ? (
            <p className="mb-4 rounded bg-primary px-3 py-2 text-sm font-semibold text-white">
              Draft preview. Not published and not indexed.
            </p>
          ) : null}
          <nav aria-label="Breadcrumb" className="text-sm text-text-light">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/insights" className="hover:text-primary">Insights</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-text">{cluster.label}</li>
            </ol>
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-primary">{cluster.label}</p>
          <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-text md:text-5xl">{a.title}</h1>
          <p className="mt-6 text-base text-text-light">
            By <span className="font-medium text-text">{author.name}</span>, {author.jobTitle}, {author.organization}
          </p>
          <p className="mt-1 text-sm text-text-light">
            Published <time dateTime={a.datePublished}>{formatDate(a.datePublished)}</time>
            {a.dateModified !== a.datePublished ? (
              <> · Updated <time dateTime={a.dateModified}>{formatDate(a.dateModified)}</time></>
            ) : null}
            {" "}· {readingMinutes(a)} min read
          </p>
        </div>
      </header>

      <div className="bg-white py-10">
        <div className="mx-auto max-w-3xl px-6">
          <section aria-label="The question" className="rounded-lg border border-border bg-surface p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-text-light">The question</p>
            <p className="mt-2 font-heading text-xl font-semibold text-text">{a.businessQuestion}</p>
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-text-light">Short answer</p>
            <p className="mt-2 text-lg leading-relaxed text-text">{a.shortAnswer}</p>
          </section>

          {toc.length >= 3 ? (
            <nav aria-label="In this article" className="mt-8 text-base">
              <p className="font-heading font-semibold text-text">In this article</p>
              <ol className="mt-2 list-decimal space-y-1 pl-6">
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="text-secondary hover:text-primary hover:underline">{t.text}</a></li>
                ))}
              </ol>
            </nav>
          ) : null}

          <div className="mt-10">
            <ArticleBody blocks={a.body} />
          </div>

          <section aria-labelledby="sources-heading" className="mt-14 border-t border-border pt-8">
            <h2 id="sources-heading" className="font-heading text-2xl font-bold text-primary">Sources</h2>
            <ol className="mt-4 space-y-3 text-base">
              {a.sources.map((s, i) => (
                <li key={s.url} id={`source-${i + 1}`} className="scroll-mt-24 pl-1">
                  <span className="font-medium text-text">[{i + 1}]</span>{" "}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event="insights-source-click"
                    data-umami-event-slug={a.slug}
                    data-umami-event-host={new URL(s.url).hostname}
                    className="text-secondary underline underline-offset-2 hover:text-primary"
                  >
                    {s.title}
                  </a>
                  . {s.publisher}. Accessed {formatDate(s.accessed)}.
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="services-heading" className="mt-12 rounded-lg border border-border p-6">
            <h2 id="services-heading" className="font-heading text-xl font-bold text-text">Related Central Orbit pages</h2>
            <ul className="mt-4 space-y-4">
              {a.serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    data-umami-event={l.href === "/k-beauty-latam" ? "insights-assessment-click" : "insights-service-link-click"}
                    data-umami-event-slug={a.slug}
                    data-umami-event-target={l.href}
                    className="font-semibold text-secondary underline underline-offset-2 hover:text-primary"
                  >
                    {SERVICE_LINK_ROUTES[l.href]}
                  </Link>
                  <p className="mt-1 text-base text-text-light">{l.reason}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cta-heading" className="mt-8 rounded-lg bg-secondary p-6 text-white">
            <h2 id="cta-heading" className="font-heading text-xl font-bold">Discuss your situation</h2>
            <p className="mt-2 leading-relaxed">{a.cta.text}</p>
            <a
              href={mail}
              data-umami-event="insights-contact-click"
              data-umami-event-slug={a.slug}
              data-umami-event-cluster={a.cluster}
              className="mt-5 inline-block rounded-md bg-white px-5 py-3 font-semibold text-secondary hover:bg-surface"
            >
              Email {CONTACT_EMAIL}
            </a>
          </section>

          {related.length > 0 ? (
            <section aria-labelledby="related-heading" className="mt-12">
              <h2 id="related-heading" className="font-heading text-xl font-bold text-text">Keep reading</h2>
              <ul className="mt-4 space-y-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/insights/${r.slug}`} className="font-semibold text-secondary hover:text-primary hover:underline">{r.title}</Link>
                    <p className="mt-1 text-base text-text-light">{r.businessQuestion}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </article>
  );
}
