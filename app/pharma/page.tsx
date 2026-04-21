import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import {
  Cloud,
  ShieldCheck,
  Globe,
  Plug,
  Languages,
  Film,
  Database,
  Settings2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharma",
  description:
    "Manage e-PILs across all EU markets with a compliant, API-driven platform built for ePI transformation.",
};

export default function PharmaPage() {
  return (
    <>
      <PageHero
        eyebrow="For pharmaceutical companies"
        title="One platform to manage every e-PIL, in every EU market."
        description="Leaphy is your gateway to effective leaflet management and digital transformation — built specifically for e-PIL across the European Union."
        image="/images/pharma-lab.webp"
        imageAlt="Modern pharmaceutical research office with data dashboards"
        cta={{ href: "/contact", label: "Book a demo" }}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Platform"
            title="Comprehensive ePI administration."
            description="Versatile access through multiple channels, available in all European languages — designed for the full scale of EU pharmaceutical operations."
          />
          <div className="mt-12">
            <FeatureGrid
              features={[
                {
                  icon: Globe,
                  title: "All EU markets",
                  description:
                    "Manage leaflets across every EU country from a single workspace.",
                },
                {
                  icon: Languages,
                  title: "All EU languages",
                  description:
                    "Native support for every official EU language, with versioning and approvals.",
                },
                {
                  icon: Database,
                  title: "Structured data",
                  description:
                    "Leaflets transformed into structured chapters, optimized for usability and reuse.",
                },
                {
                  icon: Cloud,
                  title: "Azure-secured storage",
                  description:
                    "Data securely stored in Azure with daily updates synced to your environment.",
                },
                {
                  icon: ShieldCheck,
                  title: "FMD & ISO IDMP",
                  description:
                    "Metadata aligned with the Falsified Medicines Directive and ISO IDMP standards.",
                },
                {
                  icon: Plug,
                  title: "API everywhere",
                  description:
                    "Push leaflet data into your company database, website, or partner channel via API.",
                },
                {
                  icon: Film,
                  title: "Beyond the leaflet",
                  description:
                    "Enrich e-PILs with audio, video and supplementary digital content.",
                },
                {
                  icon: Settings2,
                  title: "Push communication",
                  description:
                    "Notify patients and HCPs the instant a leaflet or safety message changes.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-soft ring-1 ring-ink/5">
                <Image
                  src="/images/epi-transform.webp"
                  alt="Paper leaflet transforming into structured digital data"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">From PDF to ePI</p>
              <h2 className="mt-3 font-display text-display-2 text-ink">
                Your leaflets, optimised for the digital era.
              </h2>
              <p className="mt-4 text-ink/65">
                Leaphy diligently transforms pharmaceutical leaflets into a
                structured data format that's optimised for usability and
                multi-channel distribution. From the moment a label is approved
                to the moment a patient reads it, every word stays in sync.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink/75">
                {[
                  "Structured chapters mapped to ISO IDMP standards",
                  "Daily database updates with full version control",
                  "Multi-channel distribution: app, web, API, embed",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to modernise your ePI strategy?"
        description="Whether you're piloting Belgium or rolling out across the EU, Leaphy meets you where you are — and scales with you."
        ctaPrimary={{ href: "/contact", label: "Book a demo" }}
        ctaSecondary={{ href: "/epi-transformation", label: "Explore ePI" }}
      />
    </>
  );
}
