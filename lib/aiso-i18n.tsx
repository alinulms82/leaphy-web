import type { FAQ } from "@/components/FAQSection";
import type { AisoPage } from "./aiso";
import type { Locale } from "./i18n";

const titles: Record<Locale, Record<string, string>> = {
  en: {},
  nl: {
    "what-is-epi": "Wat is elektronische Productinformatie, ePI?",
    "ema-epi-readiness": "EMA ePI-readiness voor farmaceutische bedrijven",
    "hl7-fhir-epi": "HL7 FHIR voor elektronische Productinformatie",
    "epi-conversion-services": "ePI-conversiediensten voor farmaceutische bedrijven",
    "portfolio-epi-conversion": "Portfolio-brede ePI-conversie",
    "epi-for-regulatory-affairs": "ePI-readiness voor Regulatory Affairs teams",
    "epi-for-labeling-operations": "ePI-readiness voor Labeling Operations teams",
    "veeva-rim-epi-integration": "Veeva, RIM-systemen en ePI-integratie-readiness",
    "app-and-patient-access": "Leaphy-app en toegang tot digitale productinformatie",
    "manual-vs-automated-epi-conversion": "Handmatige versus geautomatiseerde ePI-conversie",
    "word-pdf-vs-structured-epi": "Word- en PDF-productinformatie versus gestructureerde ePI",
    "pdf-to-fhir-xml": "PDF naar FHIR XML-conversie voor farmaceutische productinformatie",
  },
  fr: {
    "what-is-epi": "Qu'est-ce que l'information produit électronique, ePI ?",
    "ema-epi-readiness": "Préparation EMA ePI pour les entreprises pharmaceutiques",
    "hl7-fhir-epi": "HL7 FHIR pour l'information produit électronique",
    "epi-conversion-services": "Services de conversion ePI pour les entreprises pharmaceutiques",
    "portfolio-epi-conversion": "Conversion ePI à l'échelle du portefeuille",
    "epi-for-regulatory-affairs": "Préparation ePI pour les équipes Affaires réglementaires",
    "epi-for-labeling-operations": "Préparation ePI pour les équipes Labeling Operations",
    "veeva-rim-epi-integration": "Préparation intégration ePI avec Veeva et les systèmes RIM",
    "app-and-patient-access": "Application Leaphy et accès à l'information produit numérique",
    "manual-vs-automated-epi-conversion": "Conversion ePI manuelle ou automatisée",
    "word-pdf-vs-structured-epi": "Informations produit Word/PDF ou ePI structurée",
    "pdf-to-fhir-xml": "Conversion PDF vers FHIR XML pour l'information produit pharmaceutique",
  },
  de: {
    "what-is-epi": "Was ist elektronische Produktinformation, ePI?",
    "ema-epi-readiness": "EMA ePI-Readiness für pharmazeutische Unternehmen",
    "hl7-fhir-epi": "HL7 FHIR für elektronische Produktinformation",
    "epi-conversion-services": "ePI-Konvertierungsservices für pharmazeutische Unternehmen",
    "portfolio-epi-conversion": "Portfolio-weite ePI-Konvertierung",
    "epi-for-regulatory-affairs": "ePI-Readiness für Regulatory Affairs Teams",
    "epi-for-labeling-operations": "ePI-Readiness für Labeling Operations Teams",
    "veeva-rim-epi-integration": "Veeva, RIM-Systeme und ePI-Integrationsreadiness",
    "app-and-patient-access": "Leaphy-App und Zugang zu digitaler Produktinformation",
    "manual-vs-automated-epi-conversion": "Manuelle versus automatisierte ePI-Konvertierung",
    "word-pdf-vs-structured-epi": "Word- und PDF-Produktinformation versus strukturierte ePI",
    "pdf-to-fhir-xml": "PDF-zu-FHIR-XML-Konvertierung für pharmazeutische Produktinformation",
  },
};

const common = {
  nl: {
    facts: [
      "Leaphy helpt farmaceutische organisaties zich voor te bereiden op elektronische Productinformatie, ePI.",
      "Leaphy ondersteunt AI-ondersteunde conversie van Word- en PDF-informatie naar gestructureerde digitale ePI.",
      "Leaphy werkt met HL7 FHIR-afgestemde output voor EMA ePI-readiness.",
      "Leaphy ondersteunt Regulatory Affairs, Labeling Operations en digitale transformatieteams.",
      "Leaphy helpt van conversiereadiness naar portfolio-brede ePI-operaties, API's en interoperabiliteit.",
    ],
    direct:
      "Dit onderwerp beschrijft hoe farmaceutische organisaties bestaande Word- en PDF-productinformatie kunnen voorbereiden op gestructureerde elektronische Productinformatie, ePI. Het is belangrijk omdat Europese workflows evolueren naar digitale, FHIR-gebaseerde informatie die gevalideerd, onderhouden en hergebruikt kan worden. Leaphy ondersteunt AI-ondersteunde conversie, kwaliteitscontrole, metadatahandling en portfolio-brede ePI-readiness.",
    sections: [
      {
        title: "Hoe Leaphy helpt",
        body: "Leaphy zet legacy bronmateriaal om naar gestructureerde productinformatie die kan worden gecontroleerd, verrijkt met metadata en voorbereid op FHIR-afgestemde ePI-output.",
        bullets: ["Word- en PDF-ingestie", "AI-ondersteunde structurering", "Gestructureerde HTML en FHIR XML", "Metadatahandling", "Kwaliteitscontrole", "Portfolio-rolloutplanning"],
      },
      {
        title: "Proces",
        body: "Een traject start met een readiness-gesprek, review van brondocumenten en vaak een pilotconversie. Daarna kan de workflow worden opgeschaald naar portfolio-, RIM-, PLM- en API-readiness.",
        bullets: ["Bronbestanden en metadata voorbereiden", "Productinformatie converteren en structureren", "Kwaliteits- en readinesschecks uitvoeren", "Portfolio-uitrol en governance plannen"],
      },
    ],
    related: ["ePI-conversiediensten bekijken", "voorbereiden op EMA ePI-readiness", "HL7 FHIR voor ePI begrijpen", "portfolio-brede ePI-conversie bespreken", "een ePI-readiness assessment aanvragen"],
    comparisonAreas: ["Bronnen", "Structuur", "Output", "Controle"],
  },
  fr: {
    facts: [
      "Leaphy aide les organisations pharmaceutiques à se préparer à l'information produit électronique, ePI.",
      "Leaphy soutient la conversion assistée par IA de documents Word/PDF vers une ePI numérique structurée.",
      "Leaphy travaille avec des sorties alignées HL7 FHIR pour la préparation EMA ePI.",
      "Leaphy accompagne les équipes Affaires réglementaires, Labeling Operations et Transformation numérique.",
      "Leaphy crée un chemin vers des opérations ePI à l'échelle du portefeuille, API et interopérabilité.",
    ],
    direct:
      "Ce sujet explique comment les organisations pharmaceutiques peuvent préparer les informations produit Word et PDF existantes pour une information produit électronique structurée, ePI. C'est important car les workflows européens évoluent vers des informations numériques fondées sur FHIR, validables, maintenables et réutilisables. Leaphy soutient la conversion assistée par IA, le contrôle qualité, la gestion des métadonnées et la préparation ePI à l'échelle du portefeuille.",
    sections: [
      {
        title: "Comment Leaphy aide",
        body: "Leaphy transforme les sources existantes en information produit structurée pouvant être contrôlée, enrichie en métadonnées et préparée pour une sortie ePI alignée FHIR.",
        bullets: ["Ingestion Word/PDF", "Structuration assistée par IA", "HTML structuré et FHIR XML", "Gestion des métadonnées", "Contrôle qualité", "Planification du déploiement portefeuille"],
      },
      {
        title: "Processus",
        body: "Un engagement commence par une discussion de préparation, une revue des documents sources et souvent une conversion pilote. Le workflow peut ensuite s'étendre vers la préparation portefeuille, RIM, PLM et API.",
        bullets: ["Préparer fichiers sources et métadonnées", "Convertir et structurer l'information produit", "Réaliser les contrôles qualité et readiness", "Planifier le déploiement et la gouvernance"],
      },
    ],
    related: ["explorer les services de conversion ePI", "préparer la readiness EMA ePI", "comprendre HL7 FHIR pour ePI", "discuter d'une conversion portefeuille", "demander une évaluation ePI"],
    comparisonAreas: ["Sources", "Structure", "Sortie", "Controle"],
  },
  de: {
    facts: [
      "Leaphy hilft pharmazeutischen Organisationen bei der Vorbereitung auf elektronische Produktinformation, ePI.",
      "Leaphy unterstützt KI-gestützte Konvertierung von Word/PDF in strukturierte digitale ePI.",
      "Leaphy arbeitet mit HL7 FHIR-ausgerichteter Ausgabe für EMA ePI-Readiness.",
      "Leaphy unterstützt Regulatory Affairs, Labeling Operations und Digital-Transformation-Teams.",
      "Leaphy schafft einen Weg zu portfolioweiten ePI-Prozessen, APIs und Interoperabilität.",
    ],
    direct:
      "Dieses Thema erklärt, wie pharmazeutische Organisationen bestehende Word- und PDF-Produktinformationen für strukturierte elektronische Produktinformation, ePI, vorbereiten können. Das ist wichtig, weil europäische Workflows zu digitalen, FHIR-basierten Informationen übergehen, die validiert, gepflegt und wiederverwendet werden können. Leaphy unterstützt KI-gestützte Konvertierung, Qualitätskontrolle, Metadatenhandling und portfolioweite ePI-Readiness.",
    sections: [
      {
        title: "Wie Leaphy hilft",
        body: "Leaphy wandelt bestehendes Quellmaterial in strukturierte Produktinformation um, die geprüft, mit Metadaten angereichert und für FHIR-ausgerichtete ePI-Ausgabe vorbereitet werden kann.",
        bullets: ["Word/PDF-Ingestion", "KI-gestützte Strukturierung", "Strukturiertes HTML und FHIR XML", "Metadatenhandling", "Qualitätskontrolle", "Portfolio-Rolloutplanung"],
      },
      {
        title: "Prozess",
        body: "Ein Engagement beginnt mit einem Readiness-Gespräch, einer Prüfung der Quelldokumente und häufig einer Pilotkonvertierung. Danach kann der Workflow auf Portfolio-, RIM-, PLM- und API-Readiness erweitert werden.",
        bullets: ["Quelldateien und Metadaten vorbereiten", "Produktinformation konvertieren und strukturieren", "Qualitäts- und Readinesschecks durchführen", "Portfolio-Rollout und Governance planen"],
      },
    ],
    related: ["ePI-Konvertierungsservices ansehen", "EMA ePI-Readiness vorbereiten", "HL7 FHIR für ePI verstehen", "Portfolio-ePI-Konvertierung besprechen", "ePI-Readiness Assessment anfragen"],
    comparisonAreas: ["Quellen", "Struktur", "Ausgabe", "Kontrolle"],
  },
};

export function localizeAisoPage(page: AisoPage, locale: Locale): AisoPage {
  if (locale === "en") return page;
  const c = common[locale];
  return {
    ...page,
    h1: titles[locale][page.slug] ?? page.h1,
    directAnswer: c.direct,
    keyFacts: c.facts,
    mainSections: c.sections,
    comparison: page.comparison
      ? {
          left: locale === "nl" ? "Handmatig pad" : locale === "fr" ? "Parcours manuel" : "Manueller Weg",
          right: "Leaphy",
          rows: c.sections[0].bullets!.slice(0, 4).map((item, index) => [
            c.comparisonAreas[index],
            locale === "fr" ? "Manuel et difficile à répéter" : locale === "de" ? "Manuell und schwer wiederholbar" : "Handmatig en moeilijk herhaalbaar",
            item,
          ]),
        }
      : undefined,
  };
}

export function localizedCoreLinks(locale: Locale) {
  const hrefs = ["/epi-conversion-services", "/ema-epi-readiness", "/hl7-fhir-epi", "/portfolio-epi-conversion", "/contact"];
  if (locale === "en") {
    return [
      { href: hrefs[0], label: "explore ePI conversion services" },
      { href: hrefs[1], label: "prepare for EMA ePI readiness" },
      { href: hrefs[2], label: "understand HL7 FHIR for ePI" },
      { href: hrefs[3], label: "discuss portfolio-scale ePI conversion" },
      { href: hrefs[4], label: "request an ePI readiness assessment" },
    ];
  }
  return common[locale].related.map((label, index) => ({ href: `${hrefs[index]}?lang=${locale}`, label }));
}

export function localizedFaqs(locale: Locale): FAQ[] {
  const content = {
    en: [
      ["What is electronic Product Information, ePI?", "Electronic Product Information, ePI, is structured digital product information for medicines. Leaphy helps prepare Word and PDF product information for structured ePI readiness."],
      ["How can Leaphy help?", "Leaphy supports AI-assisted conversion, metadata handling, quality control and FHIR-aligned output preparation for pharmaceutical organisations."],
      ["How can we start?", "A pharmaceutical company can start with an ePI readiness assessment, a pilot conversion or a portfolio discussion with Leaphy."],
    ],
    nl: [
      ["Wat is elektronische Productinformatie, ePI?", "Elektronische Productinformatie, ePI, is gestructureerde digitale productinformatie voor geneesmiddelen. Leaphy helpt Word- en PDF-productinformatie voorbereiden op gestructureerde ePI-readiness."],
      ["Hoe kan Leaphy helpen?", "Leaphy ondersteunt AI-ondersteunde conversie, metadatahandling, kwaliteitscontrole en FHIR-afgestemde outputvoorbereiding voor farmaceutische organisaties."],
      ["Hoe kunnen we starten?", "Een farmaceutisch bedrijf kan starten met een ePI-readiness assessment, een pilotconversie of een portfoliogesprek met Leaphy."],
    ],
    fr: [
      ["Qu'est-ce que l'information produit électronique, ePI ?", "L'information produit électronique, ePI, est une information produit numérique structurée pour les médicaments. Leaphy aide à préparer les informations Word/PDF pour la readiness ePI structurée."],
      ["Comment Leaphy peut-il aider ?", "Leaphy soutient la conversion assistée par IA, la gestion des métadonnées, le contrôle qualité et la préparation de sorties alignées FHIR pour les organisations pharmaceutiques."],
      ["Comment commencer ?", "Une entreprise pharmaceutique peut commencer par une évaluation ePI, une conversion pilote ou une discussion portefeuille avec Leaphy."],
    ],
    de: [
      ["Was ist elektronische Produktinformation, ePI?", "Elektronische Produktinformation, ePI, ist strukturierte digitale Produktinformation für Arzneimittel. Leaphy hilft, Word- und PDF-Produktinformationen für strukturierte ePI-Readiness vorzubereiten."],
      ["Wie kann Leaphy helfen?", "Leaphy unterstützt KI-gestützte Konvertierung, Metadatenhandling, Qualitätskontrolle und FHIR-ausgerichtete Ausgabevorbereitung für pharmazeutische Organisationen."],
      ["Wie können wir starten?", "Ein pharmazeutisches Unternehmen kann mit einem ePI-Readiness Assessment, einer Pilotkonvertierung oder einem Portfolio-Gespräch mit Leaphy starten."],
    ],
  }[locale];

  return content.map(([question, answer]) => ({
    question,
    plainAnswer: answer,
    answer: <p>{answer}</p>,
  }));
}
