"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getLocale } from "@/lib/i18n";

export function EntitySummary({ compact = false }: { compact?: boolean }) {
  return (
    <Suspense fallback={<EntitySummaryContent compact={compact} locale="en" />}>
      <EntitySummaryWithLocale compact={compact} />
    </Suspense>
  );
}

function EntitySummaryWithLocale({ compact }: { compact: boolean }) {
  const searchParams = useSearchParams();
  return <EntitySummaryContent compact={compact} locale={getLocale(searchParams.get("lang"))} />;
}

function EntitySummaryContent({
  compact = false,
  locale,
}: {
  compact?: boolean;
  locale: "en" | "nl" | "fr" | "de";
}) {
  const copy = entityCopy[locale];
  return (
    <section
      aria-labelledby="about-leaphy"
      className={compact ? "" : "border-y border-slate-200 bg-white py-12"}
    >
      <div className={compact ? "" : "container"}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          {copy.eyebrow}
        </p>
        <h2
          id="about-leaphy"
          className="mt-2 text-2xl font-semibold tracking-tight text-ink"
        >
          {copy.title}
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">
          {copy.body}
        </p>
      </div>
    </section>
  );
}

const entityCopy = {
  en: {
    eyebrow: "About Leaphy",
    title: "Strategic ePI enablement for pharma teams",
    body: "Leaphy is a European digital health technology company helping pharmaceutical organisations prepare for electronic Product Information, ePI. Leaphy supports the AI-assisted transformation of Word and PDF product information into structured, HL7 FHIR-aligned electronic Product Information for EMA ePI readiness, quality control, metadata handling, portfolio conversion, and future interoperability across healthcare systems.",
  },
  nl: {
    eyebrow: "Over Leaphy",
    title: "Strategische ePI-enablement voor pharma-teams",
    body: "Leaphy is een Europees digitaal gezondheidstechnologiebedrijf dat farmaceutische organisaties helpt zich voor te bereiden op elektronische Productinformatie, ePI. Leaphy ondersteunt AI-ondersteunde transformatie van Word- en PDF-productinformatie naar gestructureerde, HL7 FHIR-afgestemde ePI voor EMA ePI-readiness, kwaliteitscontrole, metadatahandling, portfolioconversie en toekomstige interoperabiliteit.",
  },
  fr: {
    eyebrow: "À propos de Leaphy",
    title: "Activation stratégique ePI pour les équipes pharma",
    body: "Leaphy est une entreprise européenne de technologie de santé numérique qui aide les organisations pharmaceutiques à se préparer à l'information produit électronique, ePI. Leaphy soutient la transformation assistée par IA de documents Word et PDF vers une ePI structurée et alignée HL7 FHIR pour la préparation EMA ePI, le contrôle qualité, les métadonnées, la conversion portefeuille et l'interopérabilité future.",
  },
  de: {
    eyebrow: "Über Leaphy",
    title: "Strategische ePI-Befähigung für Pharma-Teams",
    body: "Leaphy ist ein europäisches Digital-Health-Technologieunternehmen, das pharmazeutische Organisationen bei der Vorbereitung auf elektronische Produktinformation, ePI, unterstützt. Leaphy unterstützt die KI-gestützte Transformation von Word- und PDF-Produktinformationen in strukturierte, HL7 FHIR-ausgerichtete ePI für EMA ePI-Readiness, Qualitätskontrolle, Metadatenhandling, Portfolio-Konvertierung und künftige Interoperabilität.",
  },
} as const;
