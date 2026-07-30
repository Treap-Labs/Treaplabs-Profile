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

Most homepage content, including services, projects, process steps, team
members, statistics, and testimonials, is stored near the top of
`src/app/page.tsx`. Global colors and component styles are in
`src/app/globals.css`. Local website images are stored in `src/images/` and can
be imported directly into a page or component.

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
   | Homepage sections and team | `src/app/page.tsx` |
   | Colors and global styles | `src/app/globals.css` |
   | Header and mobile menu | `src/components/layout/site-header.tsx` |
   | Footer | `src/components/layout/site-footer.tsx` |
   | Metadata and navigation | `src/content/site.ts` |
   | Local images | `src/images/` |

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
   git add src/app/page.tsx README.md
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
