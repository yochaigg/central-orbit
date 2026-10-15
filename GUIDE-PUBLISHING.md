# China skincare guides

These routes use the existing Next.js App Router and static export. Cloudflare Pages serves `out/`; no Worker, deployment setting, dependency, or build-command change is needed.

## Published resources

- `/china-skincare-guides/`
- `/china-skincare-guides/product-story/`
- `/Linkedin/Guids/Central_Orbit_Guide_MR` (existing extensionless PDF)

Cloudflare normalizes the HTML URLs to no trailing slash, consistent with the existing site export. Both URL forms work.

`public/_headers` sets noindex on the guide HTML and PDF and sets the extensionless asset to application/pdf with an inline PDF filename. HTML metadata also sets noindex. Do not add these resources to corporate navigation or a future sitemap. Do not block them in robots.txt: crawlers need access to see noindex.

## Publishing another guide

1. Create a dedicated route under `src/app/china-skincare-guides/` with its own editorial design and metadata. The shared layout provides only attribution and noindex; it does not impose a guide template.
2. Add only the approved final PDF to public assets and give its exact URL application/pdf and X-Robots-Tag: noindex headers.
3. Add the completed guide to `guides.ts` when ready to publish. Do not add draft routes, draft PDFs, placeholders, or unpublished entries.
4. Run build and lint. Test the static output using `npx wrangler pages dev out --port 8788`, including PDF headers, mobile rendering, corporate routes, and absence of sitemap/navigation links.

## Verification on 2026-10-15

- Production build passed; both routes statically exported.
- Nine existing corporate routes returned 200 in the local Cloudflare preview, kept index metadata, and had no guide links.
- Both guide pages returned 200, HTML noindex and X-Robots-Tag: noindex.
- PDF returned 200, application/pdf, and X-Robots-Tag: noindex.
- Original and served PDF SHA-256: F49D415B32BD4DFB8871EBBFA99BE2E6D052ED9C1A8730387AD69DEC3368C69B.
- Desktop and 390px mobile presentation inspected; collection contains one article. No sitemap exists in this repository.
- Repository-wide lint reports existing errors; review the current lint output before deployment.
- Existing uncommitted work in latam/page.tsx, lib/constants.ts, china/, and root layout metadata was preserved. The pre-existing PDF is untracked and must be explicitly included when an approved commit is prepared.

Nothing has been committed, pushed, or deployed.

Changed guide files pass scoped ESLint. The Codex in-app browser displays the embedded PDF area blank; HTTP delivery and byte integrity are verified, and the direct PDF link is always available. Confirm native PDF rendering in a regular desktop browser before publishing.
