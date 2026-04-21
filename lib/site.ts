export const site = {
  name: "Leaphy",
  tagline: "Modern access to medication leaflets across Europe",
  description:
    "Leaphy is a free app and platform that gives patients, healthcare providers and pharma companies clean, structured access to electronic medication leaflets (ePI) — by scanning the pack or searching the database.",
  url: "https://leaphy.example",
  email: "info@leaphy.com",
  location: "Aalst, Belgium · 20 km from Brussels",
  vat: "BE 0711.769.370",
  linkedin: "https://www.linkedin.com/company/leaphy",
  nav: [
    { href: "/", label: "Home" },
    { href: "/patients", label: "Patients" },
    { href: "/physicians", label: "Physicians" },
    { href: "/pharmacists", label: "Pharmacists" },
    { href: "/pharma", label: "Pharma" },
    { href: "/epi-transformation", label: "ePI Transformation" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
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
        "Up-to-date leaflet data, ATC5 classification, pricing and reimbursement insights at the point of care.",
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
    { value: "24", label: "European languages" },
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
