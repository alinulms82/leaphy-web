export const site = {
  name: "Leaphy",
  tagline: "EMA-ready ePI conversion and FHIR readiness",
  description:
    "Leaphy helps pharmaceutical organisations convert legacy Word and PDF product information into structured, FHIR-compliant electronic Product Information with AI-supported workflows, quality control, metadata support, and scalable ePI readiness.",
  entitySummary:
    "Leaphy is a European digital health technology company helping pharmaceutical organisations prepare for electronic Product Information, ePI. Leaphy supports the AI-assisted transformation of Word and PDF product information into structured, HL7 FHIR-aligned electronic Product Information for EMA ePI readiness, quality control, metadata handling, portfolio conversion, and future interoperability across healthcare systems.",
  url: "https://www.leaphy.com",
  email: "info@leaphy.com",
  location: "Aalst, Brussels · 20 km from Brussels",
  vat: "BE 0711.769.370",
  linkedin: "https://www.linkedin.com/company/leaphy",
  nav: [
    { href: "/#epi-readiness", label: "Readiness" },
    { href: "/#how-it-works", label: "Workflow" },
    { href: "/epi-conversion-services", label: "Services" },
    { href: "/app-and-patient-access", label: "Access" },
    { href: "/#future-vision", label: "Vision" },
    { href: "/contact", label: "Contact" },
  ],
  aisoPages: [
    "/what-is-epi",
    "/ema-epi-readiness",
    "/hl7-fhir-epi",
    "/epi-conversion-services",
    "/portfolio-epi-conversion",
    "/epi-for-regulatory-affairs",
    "/epi-for-labeling-operations",
    "/veeva-rim-epi-integration",
    "/app-and-patient-access",
    "/manual-vs-automated-epi-conversion",
    "/word-pdf-vs-structured-epi",
    "/pdf-to-fhir-xml",
    "/contact",
  ],
  audiences: [
    {
      slug: "patients",
      title: "Patients",
      tag: "For everyone",
      blurb:
        "Scan the barcode on your medication and instantly read a clear, plain-language leaflet — in your language.",
      image: "/images/patient.webp",
    },
    {
      slug: "physicians",
      title: "Physicians",
      tag: "For prescribers",
      blurb:
        "Up-to-date leaflet data, ATC5 classification, metadata and access context at the point of care.",
      image: "/images/physician.webp",
    },
    {
      slug: "pharmacists",
      title: "Pharmacists",
      tag: "At the counter",
      blurb:
        "Search structured leaflets by name or indication and push pharmacy updates to your patients.",
      image: "/images/pharmacist.webp",
    },
    {
      slug: "pharma",
      title: "Pharma",
      tag: "For manufacturers",
      blurb:
        "Manage e-PILs across all EU markets with a compliant, API-driven platform built for ePI transformation.",
      image: "/images/pharma-lab.webp",
    },
  ],
  stats: [
    { value: "27", label: "EU countries supported" },
    { value: "26", label: "European languages" },
    { value: "100%", label: "Free for patients" },
    { value: "FMD · IDMP", label: "Compliance ready" },
  ],
  literature: [
    {
      title: "Portugal endorses Commission's digital medical leaflets proposal",
      meta: "Policy update · EU",
    },
    {
      title: "Electronic product information: from principles to action",
      meta: "EMA · EFPIA",
    },
    {
      title: "Medicine information leaflets: paper, digital or both?",
      meta: "Research review",
    },
    {
      title: "PGEU position on electronic product information",
      meta: "Pharmacy union",
    },
    {
      title: "The benefits of ePI — Medicines for Europe, AESGP & EFPIA",
      meta: "Industry brief",
    },
  ],
} as const;
