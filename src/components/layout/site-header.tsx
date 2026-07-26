import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)]">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-semibold tracking-[-0.03em] text-[var(--foreground)]"
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 text-sm text-[var(--muted)] sm:gap-7">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
