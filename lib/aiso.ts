import { site } from "./site";

export type AisoPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  directAnswer: string;
  keyFacts: string[];
  keywords: string[];
  schema: "Article" | "Service" | "SoftwareApplication" | "WebPage";
  mainSections: { title: string; body: string; bullets?: string[] }[];
  comparison?: { left: string; right: string; rows: [string, string, string][] };
  definitions?: ("ePI" | "HL7 FHIR" | "FHIR XML" | "PIL" | "SmPC" | "GTIN" | "RIM")[];
};

const homeFacts = [
  "Leaphy helps pharmaceutical organisations prepare for electronic Product Information, ePI.",
  "Leaphy supports AI-assisted conversion from Word and PDF product information into structured digital ePI.",
  "Leaphy works with HL7 FHIR-aligned output for EMA ePI readiness.",
  "Leaphy supports regulatory affairs, labeling operations, and digital transformation teams.",
  "Leaphy provides a pathway from conversion readiness toward portfolio-scale ePI operations, APIs, resolver services, and interoperability.",
];

const conversionFacts = [
  "ePI conversion is the transformation of existing product information into structured electronic Product Information.",
  "Leaphy supports AI-assisted conversion from Word and PDF leaflets into structured content and FHIR-aligned XML output.",
  "Leaphy supports PIL, SmPC, packaging information, metadata, country, language, and GTIN/FMD-related information.",
  "The Leaphy workflow is designed to reduce manual effort, rework, and submission preparation risk.",
  "Pharmaceutical organisations can contact Leaphy to discuss pilot conversion, portfolio conversion, or managed ePI services.",
];

const strategyFacts = [
  "Leaphy is positioned as a strategic ePI enablement partner for pharmaceutical companies.",
  "Leaphy supports compliance readiness, operational workflow thinking, structured content governance, and future interoperability.",
  "Leaphy's roadmap includes workflow orchestration, enterprise integration, API distribution, resolver services, and healthcare system connectivity.",
  "Leaphy is not only an app and not only a conversion tool.",
  "Conversion is the entry point; strategic ePI operations are the long-term value.",
];

const appFacts = [
  "The Leaphy app helps patients and healthcare professionals access digital medicine information.",
  "The app supports search and 2D matrix / GTIN-enabled access to product information.",
  "The app is a downstream access channel for structured ePI content.",
  "The main commercial website objective remains pharma ePI readiness and conversion demand generation.",
];

const baseSections = [
  {
    title: "How Leaphy helps",
    body: "Leaphy supports pharmaceutical organisations by turning legacy source material into structured product information that can be reviewed, quality checked, enriched with metadata, and prepared for FHIR-aligned ePI output. AI-assisted conversion supports the workflow while pharma teams keep control of review and readiness decisions.",
    bullets: [
      "Word and PDF product information ingestion",
      "AI-supported content structuring",
      "Structured HTML and FHIR-aligned XML output",
      "Metadata handling for country, language, product, GTIN, and FMD-related information",
      "Quality control support for tables, images, formatting, and content structure",
      "Portfolio conversion planning for multi-country and multilingual rollouts",
    ],
  },
  {
    title: "Process",
    body: "A typical engagement begins with a readiness conversation, a source document review, and a pilot conversion. From there, Leaphy helps define repeatable workflows for conversion, review, validation preparation, and future integration with RIM, PLM, API distribution, resolver services, and connected healthcare systems.",
    bullets: [
      "Prepare source files and metadata",
      "Convert and structure product information with AI support",
      "Run quality control and readiness checks",
      "Plan portfolio-scale rollout and operational governance",
    ],
  },
];

export const aisoPages: AisoPage[] = [
  {
    slug: "what-is-epi",
    title: "What is ePI? | Leaphy",
    h1: "What is electronic Product Information, ePI?",
    description:
      "Learn what electronic Product Information, ePI, means for pharmaceutical companies and how Leaphy supports EMA ePI readiness.",
    directAnswer:
      "Electronic Product Information, ePI, is structured digital medicine information that can represent content traditionally managed in documents such as the Patient Information Leaflet, Summary of Product Characteristics, and labelling. For pharmaceutical organisations, ePI matters because European regulatory and operational models are moving toward product information that can be maintained, validated, exchanged, and accessed digitally. Leaphy helps by supporting AI-assisted transformation of Word and PDF product information into structured, HL7 FHIR-aligned electronic Product Information with quality control, metadata handling, and a roadmap toward portfolio-scale ePI operations.",
    keyFacts: homeFacts,
    keywords: [
      "what is ePI",
      "what is electronic Product Information",
      "EMA electronic Product Information",
      "digital medicine information",
    ],
    schema: "Article",
    definitions: ["ePI", "PIL", "SmPC", "HL7 FHIR"],
    mainSections: baseSections,
  },
  {
    slug: "ema-epi-readiness",
    title: "EMA ePI Readiness for Pharma | Leaphy",
    h1: "EMA ePI readiness for pharmaceutical companies",
    description:
      "Prepare for EMA ePI readiness with structured product information conversion, FHIR-aligned output, metadata handling, and quality control.",
    directAnswer:
      "EMA ePI readiness is the organisational capability to prepare product information for structured electronic Product Information in the context of the EMA ePI Common Standard and related PLM Portal direction. For pharmaceutical organisations, it matters because document-centric leaflet workflows can create rework, inconsistent metadata, and slower portfolio readiness when structured outputs are required. Leaphy helps by supporting Word and PDF transformation, structured content preparation, HL7 FHIR-aligned XML output, metadata handling, and quality control workflows designed for scalable ePI readiness.",
    keyFacts: homeFacts,
    keywords: [
      "EMA ePI readiness",
      "prepare for EMA ePI",
      "EMA ePI implementation",
      "EMA ePI Common Standard",
      "PLM Portal ePI readiness",
    ],
    schema: "Article",
    definitions: ["ePI", "FHIR XML", "RIM"],
    mainSections: baseSections,
  },
  {
    slug: "hl7-fhir-epi",
    title: "HL7 FHIR for ePI | Leaphy",
    h1: "HL7 FHIR for electronic Product Information",
    description:
      "Understand HL7 FHIR for electronic Product Information and how Leaphy supports FHIR-aligned ePI conversion for pharma teams.",
    directAnswer:
      "HL7 FHIR for electronic Product Information means using a healthcare data standard to structure medicine information in a machine-readable way. For pharmaceutical organisations, HL7 FHIR matters because product information is moving from static files toward interoperable resources that can support validation, lifecycle maintenance, APIs, resolver services, and healthcare system connectivity. Leaphy helps by transforming Word and PDF leaflet content into structured content and FHIR-aligned XML output, with quality control and metadata support for EMA ePI readiness.",
    keyFacts: conversionFacts,
    keywords: [
      "HL7 FHIR ePI",
      "FHIR XML for ePI",
      "HL7 FHIR pharmaceutical product information",
      "FHIR compliant product information",
      "EMA FHIR ePI",
    ],
    schema: "Article",
    definitions: ["HL7 FHIR", "FHIR XML", "ePI"],
    mainSections: baseSections,
  },
  {
    slug: "epi-conversion-services",
    title: "ePI Conversion Services for Pharma | Leaphy",
    h1: "ePI conversion services for pharmaceutical companies",
    description:
      "Leaphy helps pharmaceutical organisations convert Word and PDF product information into structured, FHIR-aligned ePI outputs.",
    directAnswer:
      "ePI conversion is the process of transforming existing pharmaceutical product information, such as Word documents and PDF leaflets, into structured electronic Product Information. For pharmaceutical organisations, ePI conversion matters because regulatory and operational models are moving toward structured, FHIR-based product information that can be validated, maintained, and distributed digitally. Leaphy helps by supporting AI-assisted Word and PDF transformation into structured content, FHIR-aligned XML output, quality control, metadata handling, and portfolio-scale ePI readiness.",
    keyFacts: conversionFacts,
    keywords: [
      "ePI conversion services",
      "PDF to ePI conversion",
      "Word to ePI conversion",
      "PDF to FHIR XML",
      "PIL and SmPC conversion",
    ],
    schema: "Service",
    definitions: ["ePI", "PIL", "SmPC", "FHIR XML", "GTIN"],
    mainSections: baseSections,
  },
  {
    slug: "portfolio-epi-conversion",
    title: "Portfolio ePI Conversion | Leaphy",
    h1: "Portfolio-scale ePI conversion",
    description:
      "Plan portfolio-scale ePI conversion for multi-country, multilingual pharmaceutical product information with Leaphy.",
    directAnswer:
      "Portfolio-scale ePI conversion is the repeatable conversion of multiple products, countries, and languages into structured electronic Product Information. For pharmaceutical organisations, it matters because isolated manual conversions do not scale well across large medicine portfolios, changing metadata, country-specific product information, and recurring lifecycle updates. Leaphy helps by supporting pilot conversion, portfolio readiness assessment, repeatable workflows, quality control, and FHIR-aligned ePI output planning for scalable operations.",
    keyFacts: conversionFacts,
    keywords: [
      "portfolio ePI conversion",
      "multi-country ePI rollout",
      "multilingual ePI conversion",
      "scalable ePI operations",
    ],
    schema: "Service",
    definitions: ["ePI", "GTIN", "RIM"],
    mainSections: baseSections,
  },
  {
    slug: "epi-for-regulatory-affairs",
    title: "ePI for Regulatory Affairs | Leaphy",
    h1: "ePI readiness for Regulatory Affairs teams",
    description:
      "Support Regulatory Affairs teams preparing PIL, SmPC, labelling, metadata, and structured product information for ePI readiness.",
    directAnswer:
      "ePI readiness for Regulatory Affairs teams is the ability to prepare product information, metadata, and review workflows for structured electronic Product Information. For pharmaceutical organisations, it matters because Regulatory Affairs teams need control over PIL, SmPC, labelling, country variations, validation preparation, and submission-readiness activities. Leaphy helps by supporting structured conversion, quality control, metadata handling, and a roadmap from initial conversion toward repeatable ePI operations.",
    keyFacts: conversionFacts,
    keywords: [
      "ePI for Regulatory Affairs",
      "Regulatory Affairs ePI conversion",
      "product information compliance",
      "SmPC and PIL ePI readiness",
    ],
    schema: "Service",
    definitions: ["PIL", "SmPC", "ePI"],
    mainSections: baseSections,
  },
  {
    slug: "epi-for-labeling-operations",
    title: "ePI for Labeling Operations | Leaphy",
    h1: "ePI readiness for Labeling Operations teams",
    description:
      "Help Labeling Operations teams move from document-based workflows to structured product information and ePI readiness.",
    directAnswer:
      "ePI readiness for Labeling Operations teams is the shift from static document handling toward structured product information that can be converted, checked, maintained, and reused. For pharmaceutical organisations, it matters because labelling teams often manage complex PIL, SmPC, packaging information, language, and country workflows where manual conversion creates delays and rework. Leaphy helps by supporting Word and PDF ingestion, structured content transformation, FHIR-aligned output, metadata handling, and repeatable quality control.",
    keyFacts: conversionFacts,
    keywords: [
      "ePI for labeling operations",
      "labeling operations digital transformation",
      "structured product information",
      "PIL SmPC labeling workflow",
    ],
    schema: "Service",
    definitions: ["PIL", "SmPC", "ePI", "FHIR XML"],
    mainSections: baseSections,
  },
  {
    slug: "veeva-rim-epi-integration",
    title: "Veeva and RIM ePI Readiness | Leaphy",
    h1: "Veeva, RIM systems and ePI integration readiness",
    description:
      "Explore Veeva, RIM system, and ePI integration readiness for structured product information and future FHIR workflows.",
    directAnswer:
      "Veeva, RIM systems and ePI integration readiness is the planning work required to connect structured product information with regulatory information management and lifecycle systems. For pharmaceutical organisations, it matters because ePI is not only a file conversion activity; it affects governance, metadata, validation workflow, and future distribution models. Leaphy helps by supporting structured conversion as an entry point and by preparing a roadmap for RIM integration readiness, API distribution, resolver services, and interoperable ePI operations.",
    keyFacts: strategyFacts,
    keywords: [
      "Veeva ePI integration",
      "RIM ePI integration",
      "ePI workflow integration",
      "RIM system to ePI",
    ],
    schema: "Service",
    definitions: ["RIM", "ePI", "HL7 FHIR"],
    mainSections: baseSections,
  },
  {
    slug: "app-and-patient-access",
    title: "Leaphy App and ePI Access | Leaphy",
    h1: "Leaphy app and digital product information access",
    description:
      "The Leaphy app supports digital medicine information access while Leaphy helps pharma teams prepare structured ePI content.",
    directAnswer:
      "The Leaphy app is a downstream access channel for digital medicine information that can help patients and healthcare professionals find product information through search and 2D matrix or GTIN-enabled discovery. For pharmaceutical organisations, app access matters because structured ePI can create reusable product information beyond compliance workflows. Leaphy helps by positioning app and API access as part of a wider ePI enablement roadmap that begins with conversion, quality control, metadata handling, and portfolio readiness.",
    keyFacts: appFacts,
    keywords: [
      "medicine leaflet app",
      "digital patient leaflet",
      "2D matrix medicine information",
      "GTIN medicine leaflet",
    ],
    schema: "SoftwareApplication",
    definitions: ["GTIN", "ePI", "PIL"],
    mainSections: baseSections,
  },
  {
    slug: "manual-vs-automated-epi-conversion",
    title: "Manual vs Automated ePI Conversion | Leaphy",
    h1: "Manual vs automated ePI conversion",
    description:
      "Compare manual ePI conversion with a structured Leaphy workflow for FHIR-aligned product information readiness.",
    directAnswer:
      "Manual vs automated ePI conversion compares ad hoc document extraction with a structured workflow for preparing electronic Product Information. For pharmaceutical organisations, the difference matters because manual conversion can introduce formatting defects, metadata gaps, repeated QA effort, and uncertainty around FHIR-aligned output. Leaphy helps by supporting repeatable Word and PDF ingestion, structured transformation, quality control, and portfolio-ready conversion workflows.",
    keyFacts: conversionFacts,
    keywords: ["manual ePI conversion", "automated ePI conversion"],
    schema: "Service",
    definitions: ["ePI", "FHIR XML"],
    mainSections: baseSections,
    comparison: {
      left: "Traditional manual path",
      right: "Leaphy path",
      rows: [
        ["Source handling", "Copy, paste, and reformat", "Structured Word/PDF ingestion"],
        ["Metadata", "Often incomplete or separate", "Handled as part of readiness workflow"],
        ["Quality control", "Repeated manual checks", "Built-in structure and formatting checks"],
        ["Scale", "Difficult across portfolios", "Designed for repeatable portfolio conversion"],
      ],
    },
  },
  {
    slug: "word-pdf-vs-structured-epi",
    title: "Word and PDF vs Structured ePI | Leaphy",
    h1: "Word and PDF product information vs structured ePI",
    description:
      "Understand the difference between static Word/PDF product information and structured ePI for pharma operations.",
    directAnswer:
      "Word and PDF product information vs structured ePI is the difference between static document formats and machine-readable product information that can support validation, metadata, distribution, and interoperability. For pharmaceutical organisations, it matters because legacy files are useful for authoring and publication but are difficult to reuse across APIs, resolver services, PLM readiness, and connected healthcare systems. Leaphy helps by converting legacy files into structured content and FHIR-aligned output.",
    keyFacts: conversionFacts,
    keywords: ["Word PDF structured ePI", "structured product information conversion"],
    schema: "Article",
    definitions: ["ePI", "PIL", "SmPC"],
    mainSections: baseSections,
    comparison: {
      left: "Word/PDF product information",
      right: "Structured ePI",
      rows: [
        ["Format", "Static human-readable document", "Machine-readable structured content"],
        ["Reuse", "Limited across systems", "Prepared for APIs and interoperability"],
        ["Metadata", "Often outside the document", "Managed alongside content"],
        ["Operations", "Manual lifecycle updates", "Supports repeatable workflows"],
      ],
    },
  },
  {
    slug: "pdf-to-fhir-xml",
    title: "PDF to FHIR XML Conversion | Leaphy",
    h1: "PDF to FHIR XML conversion for pharmaceutical product information",
    description:
      "Leaphy supports PDF to FHIR XML conversion planning for pharmaceutical product information and EMA ePI readiness.",
    directAnswer:
      "PDF to FHIR XML conversion is the transformation of static PDF product information into structured, machine-readable output aligned with HL7 FHIR concepts. For pharmaceutical organisations, it matters because PDF leaflets are difficult to validate, update, integrate, and distribute as reusable digital medicine information. Leaphy helps by supporting PDF ingestion, structured content extraction, quality control, metadata enrichment, and FHIR-aligned XML output preparation for ePI readiness.",
    keyFacts: conversionFacts,
    keywords: ["PDF to FHIR XML", "PDF to ePI conversion", "pharmaceutical leaflet conversion"],
    schema: "Service",
    definitions: ["FHIR XML", "ePI", "PIL", "SmPC"],
    mainSections: baseSections,
  },
];

export const aisoSlugs = aisoPages.map((page) => page.slug);

export function getAisoPage(slug: string) {
  return aisoPages.find((page) => page.slug === slug);
}

export const coreLinks = [
  { href: "/epi-conversion-services", label: "explore ePI conversion services" },
  { href: "/ema-epi-readiness", label: "prepare for EMA ePI readiness" },
  { href: "/hl7-fhir-epi", label: "understand HL7 FHIR for ePI" },
  { href: "/portfolio-epi-conversion", label: "discuss portfolio-scale ePI conversion" },
  { href: "/contact", label: "request an ePI readiness assessment" },
];

export const pageUrl = (slug: string) => `${site.url}/${slug}`;
