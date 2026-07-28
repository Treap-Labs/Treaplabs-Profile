"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/content/site";

export function SiteHeader() {
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

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-nav">
        <Link href="#hero" className="font-display text-xl font-bold tracking-[-0.03em]">
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link className="nav-link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="theme-toggle desktop-theme-toggle relative z-[102]"
            aria-label="Toggle color theme"
            title="Toggle color theme"
            onClick={toggleTheme}
          >
            <Sun className="theme-icon-light size-[18px]" />
            <Moon className="theme-icon-dark size-[18px]" />
          </button>
          <Link href="#contact" className="button button-primary hidden md:inline-flex">
            Start a project
          </Link>
          <button
            type="button"
            className="relative z-[102] inline-flex size-10 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="text-white" /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          <ul>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-theme-control">
            <span>Appearance</span>
            <button
              type="button"
              className="mobile-theme-toggle"
              aria-label="Toggle color theme"
              onClick={toggleTheme}
            >
              <span className="mobile-theme-dark">Dark</span>
              <span className="mobile-theme-light">Light</span>
            </button>
          </div>
          <Link href="#contact" className="button button-lime mt-10" onClick={() => setOpen(false)}>
            Start a project <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
