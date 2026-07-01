import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileText,
  GitBranch,
  Layers,
  Languages,
  Network,
  QrCode,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { AISummaryBlock } from "@/components/AISummaryBlock";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { EntitySummary } from "@/components/EntitySummary";
import { JsonLd } from "@/components/JsonLd";
import { PortableImage, PortableLink } from "@/components/primitives";
import { localizedCoreLinks } from "@/lib/aiso-i18n";
import { getLocale, home, homeSections, ui, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leaphy | EMA-ready ePI conversion and FHIR readiness",
  description:
    "Leaphy helps pharma teams convert Word and PDF product information into structured, FHIR-aligned ePI outputs with AI-supported workflows and quality control.",
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Leaphy | EMA-ready ePI conversion and FHIR readiness",
    description:
      "Convert legacy product information into structured electronic Product Information with AI-supported workflows, metadata support, and scalable ePI readiness.",
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leaphy | EMA-ready ePI conversion and FHIR readiness",
    description:
      "Leaphy supports AI-assisted ePI conversion, EMA readiness, HL7 FHIR output, and portfolio-scale product information transformation.",
    images: ["/images/og-image.webp"],
  },
  keywords: [
    "ePI conversion",
    "electronic Product Information",
    "EMA ePI",
    "HL7 FHIR",
    "FHIR XML",
    "pharma leaflet conversion",
    "PLM readiness",
    "regulatory affairs ePI",
  ],
};

const solutionCards = [
  FileText,
  Blocks,
  ClipboardCheck,
  Database,
  GitBranch,
  ShieldCheck,
] as const;

const APP_STORE_URL = "https://apps.apple.com/dk/app/leaphy/id1452095084";

export default function HomePage({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams?.lang);
  const h = home[locale];
  const s = homeSections[locale];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Leaphy homepage",
          url: site.url,
          description: site.description,
          isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
        }}
      />
      <section className="relative overflow-hidden bg-[#071B33] text-white">
        <div className="absolute inset-0 grid-bg opacity-10" aria-hidden />
        <Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_520px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              {h.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              {h.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              {h.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PortableLink
                href={localizedPath("/contact", locale)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#071B33] transition hover:bg-cyan-100"
                data-cta="book-readiness-call"
              >
                {h.primary}
                <ArrowRight className="h-4 w-4" />
              </PortableLink>
              <PortableLink
                href={locale === "en" ? "#how-it-works" : `/?lang=${locale}#how-it-works`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {h.secondary}
              </PortableLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-300">
              {h.chips.map((item) => (
                <span key={item} className="rounded-full border border-white/15 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <WorkflowVisual locale={locale} />
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white py-10">
        <Container>
          <AISummaryBlock bullets={h.facts} title={ui[locale].overview} />
        </Container>
      </section>

      <EntitySummary />

      <section id="epi-readiness" className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <SectionIntro
            eyebrow={s.market.eyebrow}
            title={s.market.title}
            body={s.market.body}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {s.market.cards.map((card) => (
              <article key={card} className="rounded-lg border border-slate-200 bg-white p-5">
                <BadgeCheck className="h-5 w-5 text-brand-700" />
                <h3 className="mt-4 text-base font-semibold text-ink">{card}</h3>
              </article>
            ))}
          </div>
          <PortableLink href={localizedPath("/contact", locale)} className="btn-primary mt-8" data-cta="portfolio-assessment">
            {s.market.cta}
          </PortableLink>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionIntro
            eyebrow={s.risk.eyebrow}
            title={s.risk.title}
            body={s.risk.body}
          />
          <div className="mt-10 grid gap-3 lg:grid-cols-8">
            {s.risk.cards.map((item) => (
              <div key={item} className="rounded-lg border border-red-100 bg-red-50 p-4 text-sm font-medium text-red-900">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <SectionIntro
            eyebrow={s.solution.eyebrow}
            title={s.solution.title}
            body={s.solution.body}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.solution.cards.map((title, index) => {
              const Icon = solutionCards[index];
              return (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6">
                <Icon className="h-6 w-6 text-brand-700" />
                <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="how-it-works" className="py-16 sm:py-24">
        <Container>
          <SectionIntro
            eyebrow={s.workflow.eyebrow}
            title={s.workflow.title}
            body={s.workflow.body}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {s.workflow.steps.map(([title, body], index) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6">
                <span className="text-sm font-semibold text-brand-700">
                  {locale === "fr" ? "Étape" : locale === "de" ? "Schritt" : locale === "nl" ? "Stap" : "Step"} {index + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
          <div
            className="mt-8 rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700"
            aria-label="Workflow showing Word and PDF product information converted into structured HTML, quality checked, and prepared as HL7 FHIR-aligned ePI output."
          >
            {s.workflow.flow}
          </div>
        </Container>
      </section>

      <ComparisonSection locale={locale} />
      <EngagementSection locale={locale} />
      <AppAwarenessSection locale={locale} />
      <ValueSection locale={locale} />
      <VisionSection locale={locale} />
      <TrustSection locale={locale} />
      <KnowledgeHub locale={locale} />
      <ContactBand locale={locale} />
    </>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={inverted ? "text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200" : "text-xs font-semibold uppercase tracking-[0.18em] text-brand-700"}>{eyebrow}</p>
      <h2 className={inverted ? "mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl" : "mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"}>{title}</h2>
      <p className={inverted ? "mt-4 text-base leading-7 text-slate-200" : "mt-4 text-base leading-7 text-slate-600"}>{body}</p>
    </div>
  );
}

function WorkflowVisual({ locale }: { locale: Locale }) {
  const labels = {
    en: {
      eyebrow: "Portfolio readiness",
      title: "AI-supported ePI conversion",
      review: "QC review",
      sources: [["PIL source", "PDF / Word"], ["SmPC source", "Word"], ["Package data", "GTIN / language"]],
      outputs: [["Structure", "AI assisted"], ["Metadata", "Mapped"], ["QC", "Reviewed"], ["FHIR XML", "Prepared"]],
      package: "FHIR ePI package",
      packageBody: "Structured output for readiness review",
      steps: ["Ingest", "Structure", "Check", "Prepare"],
    },
    nl: {
      eyebrow: "Portfolio-readiness",
      title: "AI-ondersteunde ePI-conversie",
      review: "QC-review",
      sources: [["PIL-bron", "PDF / Word"], ["SmPC-bron", "Word"], ["Pakketdata", "GTIN / taal"]],
      outputs: [["Structuur", "AI-ondersteund"], ["Metadata", "Gemapt"], ["QC", "Gereviewd"], ["FHIR XML", "Voorbereid"]],
      package: "FHIR ePI-pakket",
      packageBody: "Gestructureerde output voor readiness review",
      steps: ["Ingestie", "Structuur", "Check", "Voorbereiden"],
    },
    fr: {
      eyebrow: "Préparation portefeuille",
      title: "Conversion ePI assistée par IA",
      review: "Revue QC",
      sources: [["Source PIL", "PDF / Word"], ["Source SmPC", "Word"], ["Données pack", "GTIN / langue"]],
      outputs: [["Structure", "Assistée IA"], ["Métadonnées", "Mappées"], ["QC", "Revu"], ["FHIR XML", "Préparé"]],
      package: "Package ePI FHIR",
      packageBody: "Sortie structurée pour revue de préparation",
      steps: ["Ingestion", "Structurer", "Contrôler", "Préparer"],
    },
    de: {
      eyebrow: "Portfolio-Readiness",
      title: "KI-gestützte ePI-Konvertierung",
      review: "QC-Review",
      sources: [["PIL-Quelle", "PDF / Word"], ["SmPC-Quelle", "Word"], ["Packungsdaten", "GTIN / Sprache"]],
      outputs: [["Struktur", "KI-gestützt"], ["Metadaten", "Zugeordnet"], ["QC", "Geprüft"], ["FHIR XML", "Vorbereitet"]],
      package: "FHIR ePI-Paket",
      packageBody: "Strukturierte Ausgabe für Readiness Review",
      steps: ["Ingest", "Struktur", "Check", "Vorbereiten"],
    },
  }[locale];

  const sourceIcons = [FileText, FileText, Database];
  const outputIcons = [Blocks, Database, ClipboardCheck, GitBranch];

  return (
    <div
      className="rounded-lg border border-white/15 bg-white/8 p-5 shadow-2xl backdrop-blur"
      role="img"
      aria-label="Dashboard showing a pharmaceutical leaflet portfolio converted with AI-supported structuring, quality control, metadata, and FHIR XML output."
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
            {labels.eyebrow}
          </p>
          <p className="mt-1 text-lg font-semibold text-white">
            {labels.title}
          </p>
        </div>
        <span className="rounded-md border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
          {labels.review}
        </span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1.25fr]">
        <div className="space-y-3">
          {labels.sources.map(([title, meta], index) => {
            const Icon = sourceIcons[index];
            return (
            <div key={title} className="rounded-lg bg-white p-4 text-[#071B33] shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-slate-100 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs text-slate-500">{meta}</p>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        <div className="rounded-lg border border-cyan-200/20 bg-[#0C2746] p-4">
          <div className="grid grid-cols-2 gap-3">
            {labels.outputs.map(([title, meta], index) => {
              const Icon = outputIcons[index];
              return (
              <div key={title} className="rounded-md border border-white/10 bg-white/8 p-3">
                <Icon className="h-4 w-4 text-cyan-200" />
                <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs text-slate-300">{meta}</p>
              </div>
              );
            })}
          </div>
          <div className="mt-4 rounded-md bg-white p-4 text-[#071B33]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">{labels.package}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {labels.packageBody}
                </p>
              </div>
              <div className="grid grid-cols-4 gap-1" aria-hidden>
                {Array.from({ length: 16 }).map((_, index) => (
                  <span
                    key={index}
                    className={index % 3 === 0 ? "h-2 w-2 bg-[#071B33]" : "h-2 w-2 bg-cyan-300"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2 text-center text-[11px] font-semibold text-slate-200">
        {labels.steps.map((step) => (
          <span key={step} className="border-t border-white/15 pt-2">
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}

function ComparisonSection({ locale }: { locale: Locale }) {
  const c = homeSections[locale].comparison;
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow={c.eyebrow}
          title={c.title}
          body={c.body}
        />
        <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071B33] text-white">
              <tr>
                {c.headers.map((header) => (
                  <th key={header} className="p-4">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {c.rows.map(([area, manual, leaphy]) => (
                <tr key={area}>
                  <td className="p-4 font-semibold text-ink">{area}</td>
                  <td className="p-4 text-slate-600">{manual}</td>
                  <td className="p-4 text-slate-600">{leaphy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

function EngagementSection({ locale }: { locale: Locale }) {
  const e = homeSections[locale].engagement;
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow={e.eyebrow}
          title={e.title}
          body={e.body}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {e.cards.map(([title, body, cta]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              <PortableLink href={localizedPath("/contact", locale)} className="mt-5 inline-flex text-sm font-semibold text-brand-700" data-cta="pilot-conversion">
                {cta}
              </PortableLink>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AppAwarenessSection({ locale }: { locale: Locale }) {
  const app = homeSections[locale].appCta;
  const highlightIcons = [QrCode, FileText, Languages] as const;

  return (
    <section className="bg-[#071B33] py-16 text-white sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            {app.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {app.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
            {app.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PortableLink
              href={localizedPath("/app-and-patient-access", locale)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#071B33] transition hover:bg-cyan-100"
              data-cta="leaphy-app-awareness"
            >
              {app.primary}
              <ArrowRight className="h-4 w-4" />
            </PortableLink>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-cyan-100">
              <Smartphone className="h-4 w-4" />
              {app.secondary}
            </span>
            <PortableLink
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Download Leaphy on the App Store"
              className="inline-flex transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              data-cta="app-section-app-store-badge"
            >
              <PortableImage
                src="/images/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12 w-auto"
                eager
              />
            </PortableLink>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {app.highlights.map((item, index) => {
              const Icon = highlightIcons[index];
              return (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-cyan-200/10 text-cyan-100">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl">
            <div className="overflow-hidden rounded-[1.45rem] bg-white text-[#071B33]">
              <div className="relative aspect-[4/5]">
                <PortableImage
                  src="/images/hero-scan.webp"
                  alt="Leaphy app scanning a medication pack"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071B33] via-[#071B33]/65 to-transparent p-5 pt-20 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-cyan-200 px-3 py-1 text-xs font-semibold text-[#071B33]">
                    <QrCode className="h-3.5 w-3.5" />
                    {app.scanLabel}
                  </div>
                  <p className="mt-3 text-lg font-semibold">
                    {app.phoneBody}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200">
                {app.stats.map(([value, label]) => (
                  <div key={label} className="p-4">
                    <p className="text-lg font-semibold text-ink">{value}</p>
                    <p className="mt-1 text-[11px] leading-4 text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function localizedPath(path: string, locale: Locale) {
  return locale === "en" ? path : `${path}?lang=${locale}`;
}

function ValueSection({ locale }: { locale: Locale }) {
  const v = homeSections[locale].value;
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow={v.eyebrow}
          title={v.title}
          body={v.body}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {v.cards.map((item) => (
            <article key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-5">
              <Network className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
              <h3 className="text-base font-semibold text-ink">{item}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function VisionSection({ locale }: { locale: Locale }) {
  const v = homeSections[locale].vision;
  return (
    <section id="future-vision" className="py-16 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow={v.eyebrow}
          title={v.title}
          body={v.body}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {v.phases.map(([phase, items], index) => (
            <article key={phase} className="rounded-lg border border-slate-200 bg-white p-6">
              <span className="text-sm font-semibold text-brand-700">{v.phase} {index + 1}</span>
              <h3 className="mt-3 text-xl font-semibold text-ink">{phase}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TrustSection({ locale }: { locale: Locale }) {
  const t = homeSections[locale].trust;
  return (
    <section className="bg-[#071B33] py-16 text-white sm:py-24">
      <Container>
        <SectionIntro
          eyebrow={t.eyebrow}
          title={t.title}
          body={t.body}
          inverted
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.cards.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-5 text-sm font-semibold text-white">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function KnowledgeHub({ locale }: { locale: Locale }) {
  const h = homeSections[locale].hub;
  const links = localizedCoreLinks(locale);
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow={h.eyebrow}
          title={h.title}
          body={h.body}
        />
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {links.map((link) => (
            <PortableLink key={link.href} href={link.href} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-brand-700 hover:bg-slate-50">
              {link.label}
            </PortableLink>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ContactBand({ locale }: { locale: Locale }) {
  const f = homeSections[locale].final;
  return (
    <section id="contact" className="bg-slate-50 py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_520px]">
        <div>
          <SectionIntro
            eyebrow={f.eyebrow}
            title={f.title}
            body={f.body}
          />
          <div className="mt-8 grid gap-3 text-sm text-slate-700">
            {f.bullets.map((item) => (
              <div key={item} className="flex gap-2">
                <Layers className="h-5 w-5 text-brand-700" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-ink">{f.formTitle}</h2>
          <p className="mt-2 text-sm text-slate-600">
            {f.formBody}
          </p>
          <div className="mt-6">
            <ContactForm locale={locale} />
          </div>
        </div>
      </Container>
    </section>
  );
}
