import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import {
  Search,
  Layers,
  Tags,
  Banknote,
  Bell,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Physicians",
  description:
    "Up-to-date leaflet data, ATC5 classification, pricing and reimbursement insights at the point of care.",
};

export default function PhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="For physicians"
        title="A trustworthy source of leaflet truth — at the point of care."
        description="Easily accessible, regularly updated, well-structured leaflet data at your fingertips. Free for healthcare providers."
        image="/images/physician.webp"
        imageAlt="Physician using the Leaphy leaflet platform on a tablet"
        cta={{ href: "/contact", label: "Request access" }}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Built for clinicians"
            title="Everything you need from a leaflet — none of the friction."
            description="Search by name or indication, jump to the chapter you need, and trust that what you're reading is the latest approved version."
          />
          <div className="mt-12">
            <FeatureGrid
              features={[
                {
                  icon: Search,
                  title: "Smart search",
                  description:
                    "Look up leaflets by brand, INN, or indication — across all available EU markets.",
                },
                {
                  icon: Layers,
                  title: "Chapter intelligence",
                  description:
                    "Jump straight to dosage, contraindications, interactions or side effects.",
                },
                {
                  icon: Tags,
                  title: "ATC5 classification",
                  description:
                    "Standard pharmacological classification on every product, ready for filtering.",
                },
                {
                  icon: Banknote,
                  title: "Pricing & reimbursement",
                  description:
                    "Local pricing and reimbursement insights enrich every leaflet.",
                },
                {
                  icon: Bell,
                  title: "Push updates",
                  description:
                    "Receive instant notifications when industry updates a product you follow.",
                },
                {
                  icon: ShieldCheck,
                  title: "Free for HCPs",
                  description:
                    "Registration on the Leaphy app is completely free for licensed providers.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      <CTASection
        title="Bring patient-centred care to the next level."
        description="Join the physicians using Leaphy to bridge the gap between approved leaflet data and the conversations that actually happen in the room."
        ctaPrimary={{ href: "/contact", label: "Get in touch" }}
        ctaSecondary={{ href: "/epi-transformation", label: "How ePI works" }}
      />
    </>
  );
}
