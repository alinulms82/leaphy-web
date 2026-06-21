import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { AISummaryBlock } from "@/components/AISummaryBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { DefinitionCard, type DefinitionTerm } from "@/components/DefinitionCard";
import { EntitySummary } from "@/components/EntitySummary";
import { FAQ, FAQSection, InlineLink } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { PortableLink } from "@/components/primitives";
import { aisoSlugs, getAisoPage, pageUrl } from "@/lib/aiso";
import { localizeAisoPage, localizedCoreLinks, localizedFaqs } from "@/lib/aiso-i18n";
import { getLocale, ui } from "@/lib/i18n";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return aisoSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const page = getAisoPage(params.slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: pageUrl(page.slug) },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.title,
      description: page.description,
      url: pageUrl(page.slug),
      type: "website",
      siteName: site.name,
      images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/images/og-image.webp"],
    },
    keywords: page.keywords,
  };
}

export default function AisoPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams?: { lang?: string };
}) {
  const basePage = getAisoPage(params.slug);
  if (!basePage) notFound();

  const locale = getLocale(searchParams?.lang);
  const t = ui[locale];
  const labels = pageLabels(locale);
  const page = localizeAisoPage(basePage, locale);
  const faqs = locale === "en" ? getFaqs(page.slug) : localizedFaqs(locale);
  const relatedLinks = localizedCoreLinks(locale);
  const schema =
    page.schema === "Service"
      ? serviceSchema(page)
      : page.schema === "SoftwareApplication"
        ? softwareSchema(page)
        : articleSchema(page);

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={webPageSchema(page)} />
      <section className="bg-slate-50 py-10 sm:py-16">
        <Container>
          <Breadcrumbs
            homeLabel={labels.home}
            items={[{ name: page.h1, href: `/${page.slug}` }]}
          />
          <div className="mt-8 max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              {page.directAnswer}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PortableLink
                href={locale === "en" ? "/contact" : `/contact?lang=${locale}`}
                className="btn-primary"
                data-cta="portfolio-assessment"
              >
                {localizedCta(locale).primary}
                <ArrowRight className="h-4 w-4" />
              </PortableLink>
              <PortableLink
                href={locale === "en" ? "/contact" : `/contact?lang=${locale}`}
                className="btn-secondary"
                data-cta="pilot-conversion"
              >
                {localizedCta(locale).secondary}
              </PortableLink>
            </div>
          </div>
          <div className="mt-10 max-w-5xl">
            <AISummaryBlock bullets={page.keyFacts} title={t.overview} />
          </div>
        </Container>
      </section>

      <main>
        <Container className="py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {(page.definitions ?? ["ePI", "HL7 FHIR", "FHIR XML"]).map((term) => (
              <DefinitionCard key={term} term={term as DefinitionTerm} locale={locale} />
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-12">
              {page.mainSections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-3xl font-semibold tracking-tight text-ink">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {section.body}
                  </p>
                  {section.bullets && (
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {page.comparison && (
                <section>
                  <h2 className="text-3xl font-semibold tracking-tight text-ink">
                    {labels.comparison}
                  </h2>
                  <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
                    <table className="w-full border-collapse bg-white text-left text-sm">
                      <thead className="bg-slate-50 text-slate-700">
                        <tr>
                          <th className="p-4 font-semibold">{labels.area}</th>
                          <th className="p-4 font-semibold">{page.comparison.left}</th>
                          <th className="p-4 font-semibold">{page.comparison.right}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {page.comparison.rows.map(([area, left, right]) => (
                          <tr key={area}>
                            <td className="p-4 font-medium text-ink">{area}</td>
                            <td className="p-4 text-slate-600">{left}</td>
                            <td className="p-4 text-slate-600">{right}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              <section>
                <h2 className="text-3xl font-semibold tracking-tight text-ink">
                  {labels.references}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {labels.referencesIntro}{" "}
                  <ExternalReference href="https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/product-information/electronic-product-information-epi">
                    {labels.ema}
                  </ExternalReference>
                  ,{" "}
                  <ExternalReference href="https://hl7.org/fhir/">
                    {labels.fhir}
                  </ExternalReference>
                  , {labels.and}{" "}
                  <ExternalReference href="https://www.gs1.org/standards/id-keys/gtin">
                    {labels.gtin}
                  </ExternalReference>
                  .
                </p>
              </section>
            </div>

            <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-ink">{labels.related}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <PortableLink
                      href={link.href}
                      className="text-brand-700 hover:underline"
                    >
                      {link.label}
                    </PortableLink>
                  </li>
                ))}
              </ul>
              <PortableLink
                href={locale === "en" ? "/contact" : `/contact?lang=${locale}`}
                className="btn-primary mt-6 w-full"
                data-cta="contact-form-submit"
              >
                {labels.sidebarCta}
              </PortableLink>
            </aside>
          </div>

          <FAQSection faqs={faqs} title={labels.faq} />
          <EntitySummary />
        </Container>
      </main>

      <CTASection
        title={localizedCta(locale).title}
        description={localizedCta(locale).description}
        ctaPrimary={{ href: locale === "en" ? "/contact" : `/contact?lang=${locale}`, label: localizedCta(locale).primary }}
        ctaSecondary={{ href: locale === "en" ? "/contact" : `/contact?lang=${locale}`, label: localizedCta(locale).secondary }}
      />
    </>
  );
}

function pageLabels(locale: ReturnType<typeof getLocale>) {
  return {
    en: {
      home: "Home",
      comparison: "Comparison",
      area: "Area",
      references: "Official reference points",
      referencesIntro:
        "Leaphy uses public regulatory and standards direction as context for ePI readiness discussions. Useful sources include the",
      ema: "European Medicines Agency ePI information",
      fhir: "HL7 FHIR documentation",
      gtin: "GS1 GTIN guidance",
      and: "and",
      related: "Related pages",
      sidebarCta: "Send ePI readiness request",
      faq: "Common questions",
    },
    nl: {
      home: "Home",
      comparison: "Vergelijking",
      area: "Onderdeel",
      references: "Officiele referentiepunten",
      referencesIntro:
        "Leaphy gebruikt publieke regulatoire en standaardisatie-informatie als context voor ePI-readiness gesprekken. Nuttige bronnen zijn de",
      ema: "ePI-informatie van het European Medicines Agency",
      fhir: "HL7 FHIR-documentatie",
      gtin: "GS1 GTIN-richtlijnen",
      and: "en",
      related: "Gerelateerde pagina's",
      sidebarCta: "Verstuur ePI-readiness aanvraag",
      faq: "Veelgestelde vragen",
    },
    fr: {
      home: "Accueil",
      comparison: "Comparaison",
      area: "Domaine",
      references: "Points de reference officiels",
      referencesIntro:
        "Leaphy utilise les orientations publiques des autorites et des standards comme contexte pour les discussions de preparation ePI. Les sources utiles incluent les",
      ema: "informations ePI de l'European Medicines Agency",
      fhir: "documentation HL7 FHIR",
      gtin: "orientations GS1 GTIN",
      and: "et les",
      related: "Pages associees",
      sidebarCta: "Envoyer une demande ePI",
      faq: "Questions frequentes",
    },
    de: {
      home: "Startseite",
      comparison: "Vergleich",
      area: "Bereich",
      references: "Offizielle Referenzpunkte",
      referencesIntro:
        "Leaphy nutzt oeffentliche regulatorische und standardbezogene Informationen als Kontext fuer ePI-Readiness-Gespraeche. Nuetzliche Quellen sind die",
      ema: "ePI-Informationen der European Medicines Agency",
      fhir: "HL7 FHIR-Dokumentation",
      gtin: "GS1 GTIN-Leitlinien",
      and: "und die",
      related: "Verwandte Seiten",
      sidebarCta: "ePI-Readiness-Anfrage senden",
      faq: "Haeufige Fragen",
    },
  }[locale];
}

function localizedCta(locale: ReturnType<typeof getLocale>) {
  return {
    en: {
      primary: "Request an ePI readiness assessment",
      secondary: "Discuss a pilot conversion",
      title: "Talk to Leaphy about your portfolio",
      description:
        "Request an ePI readiness assessment, discuss a pilot conversion, or plan a strategic portfolio roadmap with a team focused on pharma ePI enablement.",
    },
    nl: {
      primary: "Vraag een ePI-readiness assessment aan",
      secondary: "Bespreek een pilotconversie",
      title: "Praat met Leaphy over uw portfolio",
      description:
        "Vraag een ePI-readiness assessment aan, bespreek een pilotconversie of plan een strategische portfolioroadmap.",
    },
    fr: {
      primary: "Demander une évaluation ePI",
      secondary: "Discuter d'une conversion pilote",
      title: "Parlez à Leaphy de votre portefeuille",
      description:
        "Demandez une évaluation ePI, discutez d'une conversion pilote ou planifiez une roadmap stratégique de portefeuille.",
    },
    de: {
      primary: "ePI-Readiness Assessment anfragen",
      secondary: "Pilotkonvertierung besprechen",
      title: "Sprechen Sie mit Leaphy über Ihr Portfolio",
      description:
        "Fordern Sie ein ePI-Readiness Assessment an, besprechen Sie eine Pilotkonvertierung oder planen Sie eine strategische Portfolio-Roadmap.",
    },
  }[locale];
}

function ExternalReference({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium text-brand-700 underline"
    >
      {children}
      <ExternalLink className="h-3 w-3" />
    </a>
  );
}

function getFaqs(slug: string): FAQ[] {
  const selected = [
    "What is electronic Product Information, ePI?",
    "Is ePI mandatory for pharmaceutical companies?",
    "What is the EMA ePI Common Standard?",
    "What is HL7 FHIR?",
    "How do pharmaceutical companies convert PDF leaflets into ePI?",
    "Can Word documents be converted into structured ePI?",
    "What metadata is needed for ePI conversion?",
    "Can ePI be connected to Veeva or other RIM systems?",
    "Is Leaphy only an app?",
    "Does Leaphy publish pricing?",
    "How can we request an ePI conversion assessment?",
  ];

  if (slug.includes("portfolio")) {
    selected.splice(8, 0, "What is portfolio-scale ePI conversion?");
  }

  return selected.map((question) => faqBank[question]).filter(Boolean);
}

const faqBank: Record<string, FAQ> = {
  "What is electronic Product Information, ePI?": {
    question: "What is electronic Product Information, ePI?",
    plainAnswer:
      "Electronic Product Information, ePI, is structured digital product information for medicines. It can represent information traditionally provided through PIL, SmPC and labelling documents, while making that information easier to validate, maintain and distribute digitally.",
    answer: (
      <p>
        Electronic Product Information, ePI, is structured digital product
        information for medicines. It can represent information traditionally
        provided through PIL, SmPC and labelling documents, while making that
        information easier to validate, maintain and distribute digitally. Learn
        more in <InlineLink href="/what-is-epi">what is ePI</InlineLink>.
      </p>
    ),
  },
  "Is ePI mandatory for pharmaceutical companies?": {
    question: "Is ePI mandatory for pharmaceutical companies?",
    plainAnswer:
      "ePI requirements are developing across Europe, and pharmaceutical companies should prepare for structured digital product information without assuming guaranteed timelines or outcomes. Leaphy supports readiness planning rather than making legal claims.",
    answer: (
      <p>
        ePI requirements are developing across Europe, and pharmaceutical
        companies should prepare for structured digital product information
        without assuming guaranteed timelines or outcomes. Leaphy supports
        readiness planning, pilot conversion, and portfolio assessment. Start
        with <InlineLink href="/ema-epi-readiness">EMA ePI readiness</InlineLink>.
      </p>
    ),
  },
  "What is the EMA ePI Common Standard?": {
    question: "What is the EMA ePI Common Standard?",
    plainAnswer:
      "The EMA ePI Common Standard provides direction for structured electronic Product Information in Europe. It is relevant to pharma teams because it frames how product information may be represented, exchanged and prepared for digital workflows.",
    answer: (
      <p>
        The EMA ePI Common Standard provides direction for structured electronic
        Product Information in Europe. It is relevant because it frames how
        product information may be represented, exchanged, and prepared for
        digital workflows. Leaphy supports{" "}
        <InlineLink href="/ema-epi-readiness">EMA ePI readiness</InlineLink>.
      </p>
    ),
  },
  "What is HL7 FHIR?": {
    question: "What is HL7 FHIR?",
    plainAnswer:
      "HL7 FHIR is a healthcare data standard used to structure and exchange healthcare information digitally. In ePI, FHIR concepts can support machine-readable medicine information, FHIR XML output and future interoperability.",
    answer: (
      <p>
        HL7 FHIR is a healthcare data standard used to structure and exchange
        healthcare information digitally. In ePI, FHIR concepts can support
        machine-readable medicine information, FHIR XML output, and future
        interoperability. Read about{" "}
        <InlineLink href="/hl7-fhir-epi">HL7 FHIR for ePI</InlineLink>.
      </p>
    ),
  },
  "How do pharmaceutical companies convert PDF leaflets into ePI?": {
    question: "How do pharmaceutical companies convert PDF leaflets into ePI?",
    plainAnswer:
      "Pharmaceutical companies convert PDF leaflets into ePI by extracting content, preserving structure, handling tables and images, enriching metadata, checking quality and preparing structured output such as FHIR-aligned XML.",
    answer: (
      <p>
        Pharmaceutical companies convert PDF leaflets into ePI by extracting
        content, preserving structure, handling tables and images, enriching
        metadata, checking quality, and preparing structured output such as
        FHIR-aligned XML. Explore{" "}
        <InlineLink href="/pdf-to-fhir-xml">PDF to FHIR XML conversion</InlineLink>.
      </p>
    ),
  },
  "Can Word documents be converted into structured ePI?": {
    question: "Can Word documents be converted into structured ePI?",
    plainAnswer:
      "Word documents can be converted into structured ePI when their content is parsed, organised, quality checked and mapped toward structured output. Leaphy supports Word to structured ePI conversion as part of pilot and portfolio workflows.",
    answer: (
      <p>
        Word documents can be converted into structured ePI when their content
        is parsed, organised, quality checked, and mapped toward structured
        output. Leaphy supports Word to structured ePI conversion through{" "}
        <InlineLink href="/epi-conversion-services">ePI conversion services</InlineLink>.
      </p>
    ),
  },
  "What metadata is needed for ePI conversion?": {
    question: "What metadata is needed for ePI conversion?",
    plainAnswer:
      "ePI conversion commonly needs product, country, language, document type, version, packaging and identifier metadata. GTIN, FMD-related information and market-specific context can support product-level linking and readiness workflows.",
    answer: (
      <p>
        ePI conversion commonly needs product, country, language, document type,
        version, packaging, and identifier metadata. GTIN, FMD-related
        information, and market-specific context can support product-level
        linking and readiness workflows. Discuss{" "}
        <InlineLink href="/portfolio-epi-conversion">portfolio ePI conversion</InlineLink>.
      </p>
    ),
  },
  "Can ePI be connected to Veeva or other RIM systems?": {
    question: "Can ePI be connected to Veeva or other RIM systems?",
    plainAnswer:
      "ePI can be planned with Veeva or other RIM system integration in mind, especially where structured content, metadata and workflow governance are important. Leaphy supports readiness thinking for future integrations.",
    answer: (
      <p>
        ePI can be planned with Veeva or other RIM system integration in mind,
        especially where structured content, metadata, and workflow governance
        are important. Leaphy supports readiness thinking for{" "}
        <InlineLink href="/veeva-rim-epi-integration">Veeva and RIM ePI integration</InlineLink>.
      </p>
    ),
  },
  "What is portfolio-scale ePI conversion?": {
    question: "What is portfolio-scale ePI conversion?",
    plainAnswer:
      "Portfolio-scale ePI conversion is the repeatable preparation of many products, markets and languages for structured electronic Product Information. It requires consistent source handling, metadata, quality control and rollout governance.",
    answer: (
      <p>
        Portfolio-scale ePI conversion is the repeatable preparation of many
        products, markets, and languages for structured electronic Product
        Information. It requires consistent source handling, metadata, quality
        control, and rollout governance. See{" "}
        <InlineLink href="/portfolio-epi-conversion">portfolio-scale ePI conversion</InlineLink>.
      </p>
    ),
  },
  "Is Leaphy only an app?": {
    question: "Is Leaphy only an app?",
    plainAnswer:
      "Leaphy is not only an app. The app is a downstream access channel for digital medicine information, while the primary commercial focus is helping pharma teams with ePI conversion, readiness and strategic operations.",
    answer: (
      <p>
        Leaphy is not only an app. The app is a downstream access channel for
        digital medicine information, while the primary commercial focus is
        helping pharma teams with ePI conversion, readiness, and strategic
        operations. Review{" "}
        <InlineLink href="/app-and-patient-access">app and patient access</InlineLink>.
      </p>
    ),
  },
  "Does Leaphy publish pricing?": {
    question: "Does Leaphy publish pricing?",
    plainAnswer:
      "Leaphy does not publish pricing on the website. Pharmaceutical organisations can request an ePI readiness assessment, pilot conversion discussion, portfolio conversation or tailored proposal based on scope and maturity.",
    answer: (
      <p>
        Leaphy does not publish pricing on the website. Pharmaceutical
        organisations can request an ePI readiness assessment, pilot conversion
        discussion, portfolio conversation, or tailored proposal based on scope
        and maturity. Use the{" "}
        <InlineLink href="/contact">Leaphy contact form</InlineLink>.
      </p>
    ),
  },
  "How can we request an ePI conversion assessment?": {
    question: "How can we request an ePI conversion assessment?",
    plainAnswer:
      "A pharmaceutical company can request an ePI conversion assessment by contacting Leaphy with source document types, product scope, countries, languages, metadata availability and the preferred starting point.",
    answer: (
      <p>
        A pharmaceutical company can request an ePI conversion assessment by
        contacting Leaphy with source document types, product scope, countries,
        languages, metadata availability, and the preferred starting point.{" "}
        <InlineLink href="/contact">Request an ePI readiness assessment</InlineLink>.
      </p>
    ),
  },
};

function webPageSchema(page: NonNullable<ReturnType<typeof getAisoPage>>) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.h1,
    url: pageUrl(page.slug),
    description: page.description,
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  };
}

function articleSchema(page: NonNullable<ReturnType<typeof getAisoPage>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: pageUrl(page.slug),
  };
}

function serviceSchema(page: NonNullable<ReturnType<typeof getAisoPage>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ePI conversion services",
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "Europe",
    serviceType:
      "Electronic Product Information conversion, HL7 FHIR ePI readiness, pharma product information transformation",
    audience: [
      "Pharmaceutical companies",
      "Regulatory Affairs teams",
      "Labeling Operations teams",
      "Digital Transformation teams",
    ],
    description: page.description,
    url: pageUrl(page.slug),
  };
}

function softwareSchema(page: NonNullable<ReturnType<typeof getAisoPage>>) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Leaphy app",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web, iOS, Android",
    description: page.description,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    url: pageUrl(page.slug),
  };
}
