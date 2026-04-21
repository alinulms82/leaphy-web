import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AudienceCard } from "@/components/AudienceCard";
import { StatBand } from "@/components/StatBand";
import { LiteratureList } from "@/components/LiteratureList";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { FeatureGrid } from "@/components/FeatureGrid";
import { site } from "@/lib/site";
import {
  ScanLine,
  Database,
  Globe,
  ShieldCheck,
  Layers,
  Languages,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />

      <StatBand />

      <section id="audiences" className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Built for everyone"
              title="One platform. Four audiences. Zero friction."
              description="Patients scan. Healthcare providers search. Pharma publishes. Everyone works from the same trusted source of leaflet truth."
            />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {site.audiences.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <AudienceCard a={a} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Leaphy platform"
            title="Comprehensive ePI management for the European pharma chain."
            description="From the moment a leaflet is approved to the moment a patient reads it on their phone — Leaphy moves the data, structures it, translates it, and keeps it compliant."
          />

          <div className="mt-12">
            <FeatureGrid
              features={[
                {
                  icon: ScanLine,
                  title: "Scan & read",
                  description:
                    "Patients scan the barcode or 2D matrix on the pack. The right leaflet, right away.",
                },
                {
                  icon: Database,
                  title: "Structured data",
                  description:
                    "Every leaflet is parsed into clean, chapter-level data, ready to query, search and reuse.",
                },
                {
                  icon: Languages,
                  title: "Multilingual",
                  description:
                    "Available in all major European languages so every patient reads in their own tongue.",
                },
                {
                  icon: Globe,
                  title: "All EU markets",
                  description:
                    "Built to scale from the Belgian pilot to the entire EU, country by country.",
                },
                {
                  icon: ShieldCheck,
                  title: "FMD & ISO IDMP",
                  description:
                    "Metadata aligned with the Falsified Medicines Directive and ISO IDMP standards.",
                },
                {
                  icon: Layers,
                  title: "API first",
                  description:
                    "Securely stored on Azure, with daily updates pushed via API to your environment.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      <LiteratureList />

      <CTASection
        title="Make your leaflet work harder."
        description="Whether you’re a patient looking for clarity, a clinician looking for speed, or a pharma team modernising your ePI strategy — Leaphy is your platform."
        ctaPrimary={{ href: "/contact", label: "Talk to our team" }}
        ctaSecondary={{ href: "/epi-transformation", label: "How ePI works" }}
      />
    </>
  );
}
