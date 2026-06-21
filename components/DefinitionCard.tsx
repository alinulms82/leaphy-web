import type { Locale } from "@/lib/i18n";

export const definitions = {
  en: {
    ePI: "Electronic Product Information, ePI, is structured digital product information for medicines, including information traditionally provided in documents such as the Patient Information Leaflet, Summary of Product Characteristics, and labelling.",
    "HL7 FHIR":
      "HL7 FHIR is a healthcare data standard used to structure and exchange healthcare information digitally.",
    "FHIR XML":
      "FHIR XML is an XML representation of FHIR resources used to structure healthcare information in a machine-readable format.",
    PIL: "A Patient Information Leaflet, PIL, is medicine information written for patients and included with medicinal products.",
    SmPC: "A Summary of Product Characteristics, SmPC, is product information intended mainly for healthcare professionals.",
    GTIN: "A Global Trade Item Number, GTIN, identifies trade items and can support product-level linking and medicine information access.",
    RIM: "Regulatory Information Management systems help pharmaceutical companies manage regulatory product information, submissions, and lifecycle activities.",
  },
  nl: {
    ePI: "Elektronische Productinformatie, ePI, is gestructureerde digitale productinformatie voor geneesmiddelen, inclusief informatie die traditioneel in bijsluiters, SmPC en etikettering staat.",
    "HL7 FHIR":
      "HL7 FHIR is een zorgdatastandaard om gezondheidsinformatie digitaal te structureren en uit te wisselen.",
    "FHIR XML":
      "FHIR XML is een XML-weergave van FHIR-resources voor machineleesbare zorginformatie.",
    PIL: "Een Patient Information Leaflet, PIL, is geneesmiddelinformatie voor patiënten die met geneesmiddelen wordt meegeleverd.",
    SmPC: "Een Summary of Product Characteristics, SmPC, is productinformatie die vooral bedoeld is voor zorgprofessionals.",
    GTIN: "Een Global Trade Item Number, GTIN, identificeert handelsartikelen en kan productkoppeling en toegang tot geneesmiddelinformatie ondersteunen.",
    RIM: "Regulatory Information Management-systemen helpen farmaceutische bedrijven bij het beheren van regulatoire productinformatie, indieningen en lifecycle-activiteiten.",
  },
  fr: {
    ePI: "L'information produit électronique, ePI, est une information produit numérique structurée pour les médicaments, incluant les contenus traditionnellement fournis dans la notice patient, le RCP et l'étiquetage.",
    "HL7 FHIR":
      "HL7 FHIR est un standard de données de santé utilisé pour structurer et échanger l'information de santé sous forme numérique.",
    "FHIR XML":
      "FHIR XML est une représentation XML des ressources FHIR pour structurer l'information de santé dans un format lisible par machine.",
    PIL: "Une Patient Information Leaflet, PIL, est une information médicament destinée aux patients et fournie avec les médicaments.",
    SmPC: "Un Summary of Product Characteristics, SmPC, est une information produit principalement destinée aux professionnels de santé.",
    GTIN: "Un Global Trade Item Number, GTIN, identifie les articles commerciaux et peut soutenir le lien produit et l'accès à l'information médicament.",
    RIM: "Les systèmes Regulatory Information Management aident les entreprises pharmaceutiques à gérer l'information réglementaire produit, les soumissions et les activités de cycle de vie.",
  },
  de: {
    ePI: "Elektronische Produktinformation, ePI, ist strukturierte digitale Produktinformation für Arzneimittel, einschließlich Informationen aus Packungsbeilage, Fachinformation und Kennzeichnung.",
    "HL7 FHIR":
      "HL7 FHIR ist ein Gesundheitsdatenstandard zur digitalen Strukturierung und zum Austausch von Gesundheitsinformationen.",
    "FHIR XML":
      "FHIR XML ist eine XML-Darstellung von FHIR-Ressourcen für maschinenlesbare Gesundheitsinformation.",
    PIL: "Eine Patient Information Leaflet, PIL, ist Arzneimittelinformation für Patientinnen und Patienten, die mit Arzneimitteln bereitgestellt wird.",
    SmPC: "Eine Summary of Product Characteristics, SmPC, ist Produktinformation, die vor allem für medizinisches Fachpersonal bestimmt ist.",
    GTIN: "Eine Global Trade Item Number, GTIN, identifiziert Handelsartikel und kann produktbezogene Verknüpfung und Zugang zu Arzneimittelinformation unterstützen.",
    RIM: "Regulatory Information Management-Systeme helfen pharmazeutischen Unternehmen bei regulatorischer Produktinformation, Einreichungen und Lifecycle-Aktivitäten.",
  },
} as const;

export type DefinitionTerm = keyof typeof definitions.en;

export function DefinitionCard({
  term,
  locale = "en",
}: {
  term: DefinitionTerm;
  locale?: Locale;
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-base font-semibold text-ink">{term}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {definitions[locale][term]}
      </p>
    </article>
  );
}
