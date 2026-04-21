"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ScanLine } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const LANGS = ["EN", "NL", "FR", "DE"] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<(typeof LANGS)[number]>("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems = site.nav.filter((n) => n.href !== "/");

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

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition",
                  active
                    ? "bg-paper text-ink"
                    : "text-ink/70 hover:bg-paper hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full bg-paper px-1 py-1 text-xs font-medium text-ink/70 ring-1 ring-ink/5 md:flex">
            <Globe className="ml-1.5 h-3.5 w-3.5 text-ink/50" />
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "rounded-full px-2 py-1 transition",
                  lang === l
                    ? "bg-white text-ink shadow-soft"
                    : "hover:text-ink"
                )}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          <Link href="/patients" className="btn-primary hidden md:inline-flex">
            <ScanLine className="h-4 w-4" />
            Find your leaflet
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-ink/10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
          "transition"
        )}
      >
        <div className="border-t border-ink/5 bg-white/95 backdrop-blur-xl">
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base font-medium",
                      active
                        ? "bg-paper-mint text-brand-700"
                        : "text-ink/80 hover:bg-paper"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/patients"
                className="btn-primary mt-3 w-full justify-center"
              >
                <ScanLine className="h-4 w-4" />
                Find your leaflet
              </Link>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-paper px-4 py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-ink/50">
                  Language
                </span>
                <div className="flex gap-1">
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={cn(
                        "rounded-full px-2.5 py-1 text-xs font-medium transition",
                        lang === l
                          ? "bg-white text-ink shadow-soft"
                          : "text-ink/60 hover:text-ink"
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
