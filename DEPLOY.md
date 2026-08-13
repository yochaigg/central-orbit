# Deploying to Cloudflare Pages

This site is a static export (`next build` with `output: "export"` in
`next.config.ts`). No server runtime, no Cloudflare Functions, no edge
middleware — just a static `out/` directory.

## Cloudflare Pages project settings

| Setting | Value |
|---|---|
| Framework preset | `None` |
| Build command | `npx next build` |
| Build output directory | `out` |
| Root directory | `/` (repo root) |
| Node version | `20` (no `.nvmrc` / `engines` field is set in this repo — Next.js 16 requires Node 20.9+, so pin the Cloudflare Pages build image to Node 20 via the `NODE_VERSION` environment variable) |

## Environment variables

None required for the build. (The previous Resend-backed contact form
and its server action were removed as part of the static-export
migration — see below.)

## Local verification

```bash
npm install
npx next build
```

Confirms `out/index.html` and per-route HTML files are produced with no
build errors.

## Notes / what changed for static export

- Set `output: "export"` in `next.config.ts`.
- Removed `src/app/contact/actions.ts` (a `"use server"` Server Action
  that called the Resend API) and `src/components/contact/contact-form.tsx`.
  Server Actions are not supported under `output: "export"`. Both files
  were already dead code — the live `/contact` page never rendered
  `<ContactForm />`; it displays a `mailto:` link and office details
  directly, so no user-facing behavior changed.
- Removed the now-unused `resend` dependency from `package.json`.
- No API routes, `middleware.ts`, dynamic route segments, or
  `next/image` usage exist in this repo, so no other changes were
  needed for export compatibility.
