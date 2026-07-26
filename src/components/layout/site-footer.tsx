import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] py-8 text-sm text-[var(--muted)]">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>{siteConfig.name}</p>
        <p>Next.js, TypeScript, Tailwind CSS, and Motion.</p>
      </Container>
    </footer>
  );
}
