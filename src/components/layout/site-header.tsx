"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("treaplabs-theme", nextTheme);
    } catch {
      // The visual toggle still works when storage is unavailable.
    }
  };

  const sectionHref = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-nav">
        <a href={pathname === "/" ? "#hero" : "/"} className="font-display text-xl font-bold tracking-[-0.03em]">
          {siteConfig.name}
        </a>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={sectionHref(item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="theme-toggle desktop-theme-toggle relative z-[102]"
            aria-label="Ganti tema warna"
            title="Ganti tema warna"
            onClick={toggleTheme}
          >
            <Sun className="theme-icon-light size-[18px]" />
            <Moon className="theme-icon-dark size-[18px]" />
          </button>
          <a href={sectionHref("#contact")} className="button button-primary hidden md:inline-flex">
            Mulai Proyek
          </a>
          <button
            type="button"
            className="relative z-[102] inline-flex size-10 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="mobile-menu-icon" /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <nav aria-label="Navigasi mobile">
          <ul>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a href={sectionHref(item.href)} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-theme-control">
            <span>Tampilan</span>
            <button
              type="button"
              className="mobile-theme-toggle"
              aria-label="Ganti tema warna"
              onClick={toggleTheme}
            >
              <span className="mobile-theme-dark">Gelap</span>
              <span className="mobile-theme-light">Terang</span>
            </button>
          </div>
          <a href={sectionHref("#contact")} className="button button-lime mt-10" onClick={() => setOpen(false)}>
            Mulai Proyek <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
