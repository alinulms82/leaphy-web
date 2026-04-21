import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { site } from "@/lib/site";

export function Footer() {
  const cols = [
    {
      title: "Audiences",
      links: [
        { href: "/patients", label: "Patients" },
        { href: "/physicians", label: "Physicians" },
        { href: "/pharmacists", label: "Pharmacists" },
        { href: "/pharma", label: "Pharma" },
      ],
    },
    {
      title: "Platform",
      links: [
        { href: "/epi-transformation", label: "ePI Transformation" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/contact", label: "Disclaimer" },
        { href: "/contact", label: "Privacy Policy" },
        { href: "/contact", label: "Cookie Settings" },
      ],
    },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />

      <Container className="relative grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Leaphy makes electronic medication leaflets accessible, structured
            and trustworthy — for everyone in the European healthcare chain.
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/70">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-brand-300" />
              {site.location}
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-brand-300" />
              <a
                href={`mailto:${site.email}`}
                className="transition hover:text-white"
              >
                {site.email}
              </a>
            </div>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-3.5 py-2 text-xs font-medium ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Newsletter
          </h3>
          <p className="mt-4 text-sm text-white/70">
            Get the latest from Leaphy on ePI in Europe.
          </p>
          <div className="mt-4">
            <NewsletterForm dark />
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Leaphy Europe. All rights reserved.</span>
          <span>VAT {site.vat}</span>
        </Container>
      </div>
    </footer>
  );
}
