"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { site } from "@/lib/site";
import { PortableLink } from "./primitives";
import { getLocale } from "@/lib/i18n";

export function Footer() {
  return (
    <Suspense fallback={<FooterContent locale="en" />}>
      <FooterWithLocale />
    </Suspense>
  );
}

function FooterWithLocale() {
  const searchParams = useSearchParams();
  return <FooterContent locale={getLocale(searchParams.get("lang"))} />;
}

function FooterContent({ locale }: { locale: "en" | "nl" | "fr" | "de" }) {
  const labels = footerLabels[locale];
  const cols = [
    {
      title: labels.services,
      links: [
        { href: "/epi-conversion-services", label: labels.conversion },
        { href: "/portfolio-epi-conversion", label: labels.portfolio },
        { href: "/epi-for-regulatory-affairs", label: labels.ra },
        { href: "/epi-for-labeling-operations", label: labels.labeling },
      ],
    },
    {
      title: labels.hub,
      links: [
        { href: "/what-is-epi", label: labels.what },
        { href: "/ema-epi-readiness", label: labels.ema },
        { href: "/hl7-fhir-epi", label: labels.fhir },
        { href: "/veeva-rim-epi-integration", label: labels.rim },
      ],
    },
    {
      title: labels.legal,
      links: [
        { href: "/contact", label: labels.disclaimer },
        { href: "/contact", label: labels.privacy },
        { href: "/contact", label: labels.cookies },
      ],
    },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <Container className="relative grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <div className="inline-flex rounded-lg bg-white px-3 py-2">
            <Logo />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {site.entitySummary}
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
                  <PortableLink
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </PortableLink>
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
            {labels.newsletterBody}
          </p>
          <div className="mt-4">
            <NewsletterForm dark locale={locale} />
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Leaphy Europe. {labels.rights}</span>
          <span>VAT {site.vat}</span>
        </Container>
      </div>
    </footer>
  );
}

const footerLabels = {
  en: {
    services: "Pharma services",
    conversion: "ePI conversion services",
    portfolio: "Portfolio conversion",
    ra: "Regulatory Affairs",
    labeling: "Labeling Operations",
    hub: "ePI Knowledge Hub",
    what: "What is ePI?",
    ema: "EMA ePI readiness",
    fhir: "HL7 FHIR for ePI",
    rim: "Veeva and RIM integration readiness",
    legal: "Legal",
    disclaimer: "Disclaimer",
    privacy: "Privacy Policy",
    cookies: "Cookie Settings",
    newsletterBody: "Get the latest from Leaphy on ePI in Europe.",
    rights: "All rights reserved.",
  },
  nl: {
    services: "Pharma-diensten",
    conversion: "ePI-conversiediensten",
    portfolio: "Portfolioconversie",
    ra: "Regulatory Affairs",
    labeling: "Labeling Operations",
    hub: "ePI Knowledge Hub",
    what: "Wat is ePI?",
    ema: "EMA ePI-readiness",
    fhir: "HL7 FHIR voor ePI",
    rim: "Veeva en RIM integratie-readiness",
    legal: "Juridisch",
    disclaimer: "Disclaimer",
    privacy: "Privacybeleid",
    cookies: "Cookie-instellingen",
    newsletterBody: "Ontvang het laatste nieuws van Leaphy over ePI in Europa.",
    rights: "Alle rechten voorbehouden.",
  },
  fr: {
    services: "Services pharma",
    conversion: "Services de conversion ePI",
    portfolio: "Conversion portefeuille",
    ra: "Affaires réglementaires",
    labeling: "Labeling Operations",
    hub: "Hub de connaissances ePI",
    what: "Qu'est-ce que l'ePI ?",
    ema: "Préparation EMA ePI",
    fhir: "HL7 FHIR pour ePI",
    rim: "Préparation intégration Veeva et RIM",
    legal: "Juridique",
    disclaimer: "Disclaimer",
    privacy: "Politique de confidentialité",
    cookies: "Paramètres cookies",
    newsletterBody: "Recevez les dernières nouvelles de Leaphy sur l'ePI en Europe.",
    rights: "Tous droits réservés.",
  },
  de: {
    services: "Pharma Services",
    conversion: "ePI-Konvertierungsservices",
    portfolio: "Portfolio-Konvertierung",
    ra: "Regulatory Affairs",
    labeling: "Labeling Operations",
    hub: "ePI Knowledge Hub",
    what: "Was ist ePI?",
    ema: "EMA ePI-Readiness",
    fhir: "HL7 FHIR für ePI",
    rim: "Veeva und RIM Integrationsreadiness",
    legal: "Rechtliches",
    disclaimer: "Disclaimer",
    privacy: "Datenschutz",
    cookies: "Cookie-Einstellungen",
    newsletterBody: "Erhalten Sie Neuigkeiten von Leaphy zu ePI in Europa.",
    rights: "Alle Rechte vorbehalten.",
  },
} as const;
