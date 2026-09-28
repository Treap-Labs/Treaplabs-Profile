"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useSitePathname } from "@/components/layout/site-path-provider";
import { siteConfig } from "@/content/site";
import { uiContent } from "@/content/ui";
import { getLocaleFromPathname, getLocalizedPath } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = useSitePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const locale = getLocaleFromPathname(pathname);
  const copy = uiContent[locale].header;
  const navigation = locale === "id" ? siteConfig.navigation : siteConfig.navigationEn;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

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

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
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

  const homePath = getLocalizedPath("/", locale);
  const isHome = getLocalizedPath(pathname, locale) === homePath;
  const sectionHref = (hash: string) => (isHome ? hash : `${homePath}${hash}`);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-nav">
        <a href={isHome ? "#hero" : homePath} onClick={() => setOpen(false)} className="shrink-0 font-display text-xl font-bold tracking-[-0.03em]">
          {siteConfig.name}
        </a>

        <nav aria-label={copy.mainNavigation} className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-10">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={sectionHref(item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher onNavigate={() => setOpen(false)} />
          <button
            type="button"
            className="theme-toggle desktop-theme-toggle relative z-[102]"
            aria-label={copy.changeTheme}
            title={copy.changeTheme}
            onClick={toggleTheme}
          >
            <Sun className="theme-icon-light size-[18px]" aria-hidden="true" />
            <Moon className="theme-icon-dark size-[18px]" aria-hidden="true" />
          </button>
          <div className="hidden lg:block">
            <a href={sectionHref("#contact")} className="button button-primary">
              {copy.startProject}
            </a>
          </div>
          <button
            type="button"
            ref={menuButton}
            className="relative z-[102] inline-flex size-10 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="mobile-menu-icon" aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" inert={!open} className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <nav aria-label={copy.mobileNavigation}>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={sectionHref(item.href)} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-theme-control">
            <span>{copy.appearance}</span>
            <button
              type="button"
              className="mobile-theme-toggle"
              aria-label={copy.changeTheme}
              onClick={toggleTheme}
            >
              <span className="mobile-theme-dark">{copy.dark}</span>
              <span className="mobile-theme-light">{copy.light}</span>
            </button>
          </div>
          <a href={sectionHref("#contact")} className="button button-lime mt-10" onClick={() => setOpen(false)}>
            {copy.startProject} <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
