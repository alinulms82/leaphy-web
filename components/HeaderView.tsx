"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { PortableLink } from "./primitives";
import { getLocale, languageLabels, locales, type Locale, ui } from "@/lib/i18n";

const navKeys = [
  "readiness",
  "workflow",
  "services",
  "access",
  "vision",
  "contact",
] as const;

export function HeaderView({ currentPath = "/" }: { currentPath?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lang = getLocale(searchParams.get("lang"));
  const t = ui[lang];
  const languageLabel = {
    en: "Language",
    nl: "Taal",
    fr: "Langue",
    de: "Sprache",
  }[lang];
  const menuLabel = {
    en: open ? "Close menu" : "Open menu",
    nl: open ? "Menu sluiten" : "Menu openen",
    fr: open ? "Fermer le menu" : "Ouvrir le menu",
    de: open ? "Menu schliessen" : "Menu oeffnen",
  }[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  const navItems = site.nav;

  const changeLanguage = (nextLocale: Locale) => {
    const params = new URLSearchParams(searchParams.toString());
    if (nextLocale === "en") {
      params.delete("lang");
    } else {
      params.set("lang", nextLocale);
    }
    const query = params.toString();
    router.push(`${currentPath}${query ? `?${query}` : ""}`);
  };

  const withLocale = (href: string) => {
    if (lang === "en") return href;
    const [path, hash] = href.split("#");
    const separator = path.includes("?") ? "&" : "?";
    return `${path}${separator}lang=${lang}${hash ? `#${hash}` : ""}`;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "border-b border-ink/5 bg-white/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item, index) => {
            const active =
              currentPath === item.href || currentPath.startsWith(item.href + "/");
            return (
              <PortableLink
                key={item.href}
                href={withLocale(item.href)}
                className={cn(
                  "border-b-2 py-2 text-sm font-medium transition",
                  active
                    ? "border-brand-600 text-ink"
                    : "border-transparent text-ink/65 hover:border-slate-300 hover:text-ink"
                )}
              >
                {t.nav[navKeys[index]]}
              </PortableLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <label className="hidden items-center gap-2 text-xs font-medium text-ink/60 md:flex">
            <span className="sr-only">{languageLabel}</span>
            <select
              value={lang}
              onChange={(event) => changeLanguage(event.target.value as Locale)}
              className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-ink outline-none transition hover:border-slate-300 focus:border-brand-500"
              aria-label={languageLabel}
            >
              {locales.map((l) => (
                <option key={l} value={l}>
                  {languageLabels[l]}
                </option>
              ))}
            </select>
          </label>

          <PortableLink
            href={withLocale("/contact")}
            className="btn-primary hidden md:inline-flex"
            data-cta="book-readiness-call"
          >
            <CalendarCheck className="h-4 w-4" />
            {t.nav.call}
          </PortableLink>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-ink/10 lg:hidden"
            aria-label={menuLabel}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "absolute inset-x-0 top-full overflow-hidden transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          open
            ? "pointer-events-auto max-h-[80vh] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="border-t border-ink/5 bg-white/95 shadow-soft backdrop-blur-xl">
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item, index) => {
                const active =
                  currentPath === item.href ||
                  currentPath.startsWith(item.href + "/");
                return (
                  <PortableLink
                    key={item.href}
                    href={withLocale(item.href)}
                    className={cn(
                      "border-l-2 px-4 py-3 text-base font-medium",
                      active
                        ? "border-brand-600 bg-slate-50 text-ink"
                        : "border-transparent text-ink/75 hover:bg-slate-50 hover:text-ink"
                    )}
                  >
                    {t.nav[navKeys[index]]}
                  </PortableLink>
                );
              })}
              <PortableLink
                href={withLocale("/contact")}
                className="btn-primary mt-3 w-full justify-center"
                data-cta="book-readiness-call"
              >
                <CalendarCheck className="h-4 w-4" />
                {t.nav.call}
              </PortableLink>
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 px-4 py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-ink/50">
                  {languageLabel}
                </span>
                <select
                  value={lang}
                  onChange={(event) => changeLanguage(event.target.value as Locale)}
                  className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-ink outline-none focus:border-brand-500"
                  aria-label={languageLabel}
                >
                  {locales.map((l) => (
                    <option key={l} value={l}>
                      {languageLabels[l]}
                    </option>
                  ))}
                </select>
              </div>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
