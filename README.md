# TreapLabs Profile

A static-first profile website architecture built with Next.js App Router,
TypeScript, Tailwind CSS, and Motion.

## Requirements

- Node.js 20.9 or newer
- Corepack enabled for pnpm

## Development

```bash
corepack enable
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
pnpm dev        # Start the development server
pnpm build      # Create the static site in out/
pnpm lint       # Run ESLint
pnpm typecheck  # Check TypeScript without emitting files
pnpm optimize:images # Regenerate optimized WebP and social images
pnpm prepare:heelwa-images # Download and optimize the supplied Heelwa event photos
```

## Architecture

```text
src/
|-- app/                # Routes, layouts, metadata, and global styles
|-- components/
|   |-- layout/         # Shared structural components
|   |-- motion/         # Small client-side animation boundaries
|   `-- ui/             # Reusable UI components as the site grows
|-- content/            # Typed, build-time site content
|-- lib/                # Constants and framework-independent utilities
`-- types/              # Shared TypeScript types
public/
|-- fonts/              # Optional local font assets
`-- images/             # Static image assets
```

Pages and layouts remain Server Components by default. Add `"use client"` only
to leaf components that require browser state, event handlers, or animation.
Local content in `src/content` is included at build time, which keeps routes
eligible for static generation.

## Site Configuration

Edit `src/content/site.ts` to change the site name, navigation, description,
and canonical URL. The production URL is `https://treaplabs.com`.

Homepage content in both languages, including services, process steps, and
team members, is stored in `src/content/home.ts`. Portfolio projects and their
detail pages share bilingual content in `src/content/projects.ts`.
Article content and media captions are stored in `src/content/articles.ts`.
Global colors and component styles are in
`src/app/globals.css`. Local website images are stored in `src/images/` and can
be imported directly into a page or component.

## Languages

Bahasa Indonesia is the default at `/`. English pages live under `/en/`,
including all four service pages, five project detail pages, and the articles
listing and article detail pages. The ID/EN
control in the navbar switches to the equivalent page and retains the URL
query string and section fragment.
The URL determines the language, including after a refresh or a shared link.

- `src/content/home.ts`: translated homepage content.
- `src/content/projects.ts`: translated portfolio entries and project details.
- `src/content/articles.ts`: translated article text, publication dates, event details, and media.
- `src/content/services.ts`: Indonesian and English service content.
- `src/content/ui.ts`: navigation controls, footer, service labels, and 404 text.
- `src/content/site.ts`: navigation items and site descriptions.
- `src/lib/i18n.ts`: locale detection and localized URLs.
- `src/lib/metadata.ts`: canonical URLs, language alternates, and social metadata.

`src/app/(id)/` and `src/app/en/` use separate root layouts backed by the shared
`SiteDocument` component. This keeps the exported HTML `lang` correct without
requiring JavaScript or a server. The global 404 uses Next.js's
`experimental.globalNotFound` support for multiple root layouts; its content
adapts to the requested URL in the browser.

## Articles

The articles listing is available at `/articles/` and `/en/articles/`.
The first article covers the Heelwa fashion show at MYZE Hotel Sumenep on
10 January 2026, including the app's use for the product catalog, orders and
checkout, point of sale, and stock management. Its publication date is separate
from the event date.

To add an article:

1. Add its slug to `articleSlugs` in `src/content/articles.ts` and add matching
   Indonesian and English entries to `articleContent`. Include descriptive
   image alt text and captions in both languages.
2. Put optimized photos and a 1200×630 social image under `public/images/articles/`.
   Set the image dimensions in the content entry to match the files.
3. Set `publishedAt` to the publication date and `event.date` to the event date
   when relevant. Use `YYYY-MM-DD` dates.
4. Link the story to a portfolio project with `projectSlug`. Related stories
   appear automatically on that project's detail page.
5. Run lint, typecheck, and build. Both language routes, language alternates,
   article metadata, structured data, and sitemap entries are generated from
   the content.

Heelwa media was supplied in the shared
[event folder](https://drive.google.com/drive/folders/1dbYjH7ftG2buGCbLnAw4-fgt-raW_KvK).
The photo source IDs and filenames are recorded in
`scripts/prepare-heelwa-article-images.mjs`. Run `pnpm prepare:heelwa-images`
only when regenerating these assets; normal builds use the committed local
WebP files and do not contact Drive. The article video uses the supplied
[unlisted YouTube video](https://www.youtube.com/watch?v=pqhEzoiEggA), with a
local runway poster and a click-to-load YouTube privacy-enhanced player.
A direct YouTube link is also provided. Its ID is set in the `youtubeId` field
of each language's article content.
The customer-facing website demo is an additional video at
<https://www.youtube.com/watch?v=94c9uOW7cdM>, configured in `demoVideo` for
both languages. It uses the Heelwa website mockup as its click-to-load poster.

## Updating the Website

1. Pull the latest version before editing:

   ```bash
   git pull origin main
   ```

2. Start the development server:

   ```bash
   pnpm install
   pnpm dev
   ```

3. Make the required changes. Common locations:

   | Content | File |
   |---|---|
    | Homepage sections and team | `src/content/home.ts` |
     | Portfolio projects and detail pages | `src/content/projects.ts` |
     | Articles, event details, and media captions | `src/content/articles.ts` |
    | Homepage layout | `src/components/home/home-page.tsx` |
    | Translated interface labels | `src/content/ui.ts` |
   | Colors and global styles | `src/app/globals.css` |
   | Header and mobile menu | `src/components/layout/site-header.tsx` |
   | Footer | `src/components/layout/site-footer.tsx` |
   | Metadata and navigation | `src/content/site.ts` |
    | Local images | `src/images/` |
     | Article images | `public/images/articles/` |

   Setelah mengganti PNG sumber di `src/images/`, jalankan
   `pnpm optimize:images` agar file WebP yang digunakan website ikut diperbarui.

4. Verify the website before publishing:

   ```bash
   pnpm lint
   pnpm typecheck
   pnpm build
   ```

5. Review the files that will be committed:

   ```bash
   git status
   git diff
   ```

6. Stage only the intended files, commit, and push:

   ```bash
    git add src/content/home.ts README.md
   git commit -m "Update team information"
   git push origin main
   ```

   If the SSH remote reports `Permission denied (publickey)`, push over HTTPS:

   ```bash
   git push https://github.com/Treap-Labs/Treaplabs-Profile.git main
   ```

Avoid using `git add .` without checking `git status`, because it can publish
unrelated local files.

## Deployment

The website is statically exported and automatically deployed to GitHub Pages
by `.github/workflows/deploy-pages.yml` whenever a commit is pushed to `main`.
No Hostinger DNS changes are needed for normal website updates.

Monitor deployments at:

<https://github.com/Treap-Labs/Treaplabs-Profile/actions>

When the workflow has a green check, the update is available at:

<https://treaplabs.com>

Deployment normally takes a few minutes. If the old version is still visible,
perform a hard refresh or wait for the GitHub Pages CDN cache to update. A
failed workflow does not replace the currently live website; open the failed
workflow run to see which lint, typecheck, build, or deployment step failed.

Because the site uses `output: "export"`, do not add features that require a
running Next.js server, such as cookies, Server Actions, request-time API
routes, or default server-side image optimization.
