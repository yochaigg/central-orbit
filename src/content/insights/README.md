# Insights editorial workflow

Articles live here as typed TypeScript. There is no CMS and no automated publishing. A person approves every article before it goes live.

## Weekly process

1. **Question first.** Write the decision-maker's question (a skincare executive deciding whether to commit resources). If it is not a real question someone would ask, do not write the article.
2. **Draft in chat.** Share the draft for review before creating any file.
3. **Research from primary sources.** Regulators, statistics offices, official texts. Check each figure against the source. Record the source in `sources` and cite it in the body as `[1]`.
4. **Create the file.** Copy `articles/_template.ts` to `articles/<slug>.ts`, fill it, and add an explicit import to `articles/index.ts`. Keep `status: "draft"`.
5. **Preview.** `INSIGHTS_INCLUDE_DRAFTS=1 npm run dev` shows drafts at `/insights/<slug>` with a draft banner and noindex. Production builds never include drafts.
6. **Human review.** A person checks accuracy, sources, links and tone.
7. **Publish.** After sign-off, set `status: "published"` and add `editorialReview: { approvedBy, approvedOn }`. Then `npx next build` and `npm run verify`.

## Rules

- Do not invent experience, clients, results, market figures or regulatory claims.
- Every figure and regulatory statement is cited to a source a reader can open.
- No generic introductions, filler or keyword padding.
- Author is Yochai Golan, Managing Director, Central Orbit. Do not add biography, qualifications or achievements to `authors.ts` until supplied and verified.
- Link to services only where relevant, and say why in `serviceLinks[].reason`. The K-Beauty LATAM quiz is for LATAM skincare questions.
- Update `dateModified` only when the content changes.

## What the build checks

A published article fails the build if it lacks a question, short answer, author, dates, at least three sources (one primary), a citation for every source, valid internal links, one to three service links with reasons, a CTA, search metadata within length limits, minimum length, or an approval record.

These checks reject incomplete records. They do not measure accuracy, usefulness or writing quality. The build also prints non-blocking prompts (uncited numbers, filler phrases, em dashes) for the reviewer.

## URLs

Articles publish at `/insights/<slug>` with no trailing slash. The sitemap includes only published articles. While no article is published, `/insights` is noindex and absent from the sitemap and navigation, and one noindex placeholder page (`/insights/_none`) is built because static export requires at least one route parameter.
