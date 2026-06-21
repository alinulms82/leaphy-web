import type { Metadata } from "next";
import { AISummaryBlock } from "@/components/AISummaryBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection, InlineLink } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Mail, MapPin, Linkedin, Clock } from "lucide-react";
import { contact, getLocale, ui } from "@/lib/i18n";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Leaphy about ePI readiness",
  description:
    "Contact Leaphy to request an ePI readiness assessment, pilot conversion, portfolio discussion, or strategic pharma partnership.",
  alternates: { canonical: `${site.url}/contact` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Leaphy about ePI readiness",
    description:
      "Request an ePI readiness assessment, pilot conversion, portfolio discussion, or strategic partnership conversation with Leaphy.",
    url: `${site.url}/contact`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Leaphy about ePI readiness",
    description:
      "Contact Leaphy for ePI conversion services, EMA ePI readiness, HL7 FHIR output, and portfolio-scale transformation.",
  },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams?.lang);
  const c = contact[locale];
  const t = ui[locale];
  const labels = contactLabels(locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Contact Leaphy about ePI readiness",
          url: `${site.url}/contact`,
          description: metadata.description,
        }}
      />
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24">
        <div className="grid-bg absolute inset-0 opacity-30" aria-hidden />

        <Container className="relative">
          <Breadcrumbs
            homeLabel={labels.home}
            items={[{ name: labels.contact, href: "/contact" }]}
          />
          <div className="mt-8 grid gap-10 md:grid-cols-5 md:gap-14">
            <Reveal as="div" className="md:col-span-2">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {c.h1}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            {c.intro}
          </p>
          <div className="mt-6">
            <AISummaryBlock
              bullets={c.facts}
              title={t.overview}
            />
          </div>

          <ul className="mt-10 space-y-4">
            <ContactItem icon={MapPin} label={labels.where}>
              {labels.location}
            </ContactItem>
            <ContactItem icon={Mail} label={labels.email}>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-brand-700"
              >
                {site.email}
              </a>
            </ContactItem>
            <ContactItem icon={Clock} label={labels.hours}>
              {labels.hoursValue}
            </ContactItem>
            <ContactItem icon={Linkedin} label={labels.social}>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-700"
              >
                {labels.linkedin}
              </a>
            </ContactItem>
          </ul>
            </Reveal>

            <Reveal as="div" delay={0.1} className="md:col-span-3">
          <div className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-ink/5 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">{c.formTitle}</h2>
            <p className="mt-1 text-sm text-ink/55">
              {c.formIntro}
            </p>
            <div className="mt-6">
              <ContactForm locale={locale} />
            </div>
          </div>
            </Reveal>
          </div>

          <FAQSection
            title={labels.faqTitle}
            faqs={[
              {
                question: labels.faqAssessmentQ,
                plainAnswer: labels.faqAssessmentA,
                answer: (
                  <p>
                    {labels.faqAssessmentA}{" "}
                    <InlineLink href={locale === "en" ? "/contact" : `/contact?lang=${locale}`}>
                      {labels.faqAssessmentLink}
                    </InlineLink>
                    .
                  </p>
                ),
              },
              {
                question: labels.faqPricingQ,
                plainAnswer: labels.faqPricingA,
                answer: (
                  <p>
                    {labels.faqPricingA} {labels.explore}{" "}
                    <InlineLink href={locale === "en" ? "/epi-conversion-services" : `/epi-conversion-services?lang=${locale}`}>
                      {labels.servicesLink}
                    </InlineLink>
                    .
                  </p>
                ),
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}

function contactLabels(locale: ReturnType<typeof getLocale>) {
  return {
    en: {
      home: "Home",
      contact: "Contact",
      where: "Where",
      location: "Aalst, Belgium · 20 km from Brussels",
      email: "Email",
      hours: "Hours",
      hoursValue: "Mon - Fri · 9:00 to 18:00 CET",
      social: "Social",
      linkedin: "Follow Leaphy on LinkedIn",
      faqTitle: "Common questions",
      faqAssessmentQ: "How can we request an ePI conversion assessment?",
      faqAssessmentA:
        "A pharmaceutical company can request an ePI conversion assessment by sharing product scope, source document formats, countries, languages, metadata availability, and the preferred starting point.",
      faqAssessmentLink: "Request an ePI readiness assessment",
      faqPricingQ: "Does Leaphy publish pricing?",
      faqPricingA:
        "Leaphy does not publish pricing on the website. Pharma teams can contact Leaphy for a tailored proposal based on pilot, portfolio, managed service, or strategic partnership scope.",
      explore: "Explore",
      servicesLink: "ePI conversion services",
    },
    nl: {
      home: "Home",
      contact: "Contact",
      where: "Locatie",
      location: "Aalst, Belgie · 20 km van Brussel",
      email: "E-mail",
      hours: "Bereikbaar",
      hoursValue: "Ma - vr · 9:00 tot 18:00 CET",
      social: "Sociaal",
      linkedin: "Volg Leaphy op LinkedIn",
      faqTitle: "Veelgestelde vragen",
      faqAssessmentQ: "Hoe vragen we een ePI-conversieassessment aan?",
      faqAssessmentA:
        "Een farmaceutisch bedrijf kan een ePI-conversieassessment aanvragen door productscope, brondocumentformaten, landen, talen, beschikbare metadata en het gewenste startpunt te delen.",
      faqAssessmentLink: "Vraag een ePI-readiness assessment aan",
      faqPricingQ: "Publiceert Leaphy prijzen?",
      faqPricingA:
        "Leaphy publiceert geen prijzen op de website. Pharma-teams kunnen Leaphy contacteren voor een voorstel op maat op basis van pilot-, portfolio-, managed service- of partnershipscope.",
      explore: "Bekijk",
      servicesLink: "ePI-conversiediensten",
    },
    fr: {
      home: "Accueil",
      contact: "Contact",
      where: "Lieu",
      location: "Alost, Belgique · 20 km de Bruxelles",
      email: "E-mail",
      hours: "Disponibilite",
      hoursValue: "Lun - ven · 9:00 a 18:00 CET",
      social: "Social",
      linkedin: "Suivre Leaphy sur LinkedIn",
      faqTitle: "Questions frequentes",
      faqAssessmentQ: "Comment demander une evaluation de conversion ePI ?",
      faqAssessmentA:
        "Une entreprise pharmaceutique peut demander une evaluation de conversion ePI en partageant le perimetre produit, les formats sources, les pays, les langues, les metadonnees disponibles et le point de depart souhaite.",
      faqAssessmentLink: "Demander une evaluation ePI",
      faqPricingQ: "Leaphy publie-t-il ses prix ?",
      faqPricingA:
        "Leaphy ne publie pas de prix sur le site. Les equipes pharma peuvent contacter Leaphy pour une proposition adaptee au perimetre pilote, portefeuille, service manage ou partenariat strategique.",
      explore: "Explorer",
      servicesLink: "les services de conversion ePI",
    },
    de: {
      home: "Startseite",
      contact: "Kontakt",
      where: "Standort",
      location: "Aalst, Belgien · 20 km von Brussel",
      email: "E-Mail",
      hours: "Zeiten",
      hoursValue: "Mo - Fr · 9:00 bis 18:00 CET",
      social: "Social",
      linkedin: "Leaphy auf LinkedIn folgen",
      faqTitle: "Haeufige Fragen",
      faqAssessmentQ: "Wie koennen wir ein ePI-Konvertierungsassessment anfragen?",
      faqAssessmentA:
        "Ein pharmazeutisches Unternehmen kann ein ePI-Konvertierungsassessment anfragen, indem Produktscope, Quelldokumentformate, Laender, Sprachen, verfuegbare Metadaten und der bevorzugte Startpunkt geteilt werden.",
      faqAssessmentLink: "ePI-Readiness Assessment anfragen",
      faqPricingQ: "Veroeffentlicht Leaphy Preise?",
      faqPricingA:
        "Leaphy veroeffentlicht keine Preise auf der Website. Pharma-Teams koennen Leaphy fuer ein passendes Angebot auf Basis von Pilot-, Portfolio-, Managed-Service- oder Partnership-Scope kontaktieren.",
      explore: "Mehr zu",
      servicesLink: "ePI-Konvertierungsservices",
    },
  }[locale];
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 rounded-2xl bg-white/70 p-4 ring-1 ring-white/60 backdrop-blur">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-paper-mint text-brand-600 ring-1 ring-brand-100">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-ink">{children}</p>
      </div>
    </li>
  );
}
