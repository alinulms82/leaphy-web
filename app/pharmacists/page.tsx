import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import {
  Search,
  Megaphone,
  Smartphone,
  Users,
  Layers,
  Bell,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmacists",
  description:
    "Search structured leaflets by name or indication and push pharmacy updates to your patients.",
};

export default function PharmacistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For pharmacists"
        title="Readable, updated, structured leaflet data — at the counter."
        description="Access the latest approved leaflets, search by chapter, and communicate directly with your patients through enabled push technology."
        image="/images/pharmacist.webp"
        imageAlt="Pharmacist using the Leaphy platform behind the counter"
        cta={{ href: "/contact", label: "Talk to us" }}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Designed for the counter"
            title="Help patients leave with clarity, not questions."
          />
          <div className="mt-12">
            <FeatureGrid
              features={[
                {
                  icon: Search,
                  title: "Powerful leaflet search",
                  description:
                    "Find any product instantly by name, INN or indication.",
                },
                {
                  icon: Layers,
                  title: "Structured chapters",
                  description:
                    "Skim the section you need: dosage, storage, interactions, side effects.",
                },
                {
                  icon: Smartphone,
                  title: "Recommend the app",
                  description:
                    "Send patients home with a free app that turns their pack into clear info.",
                },
                {
                  icon: Megaphone,
                  title: "Communicate directly",
                  description:
                    "Push pharmacy news, opening hours and offers to your patient base.",
                },
                {
                  icon: Bell,
                  title: "Stay informed",
                  description:
                    "Subscribe to alerts when industry updates leaflets you frequently dispense.",
                },
                {
                  icon: Users,
                  title: "Patient-centred",
                  description:
                    "Tools that bring value beyond the pill and strengthen patient trust.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      <CTASection
        title="Be the pharmacy patients return to."
        description="With Leaphy in your pocket, the right leaflet is one tap away — and so is your patient."
        ctaPrimary={{ href: "/contact", label: "Get in touch" }}
        ctaSecondary={{ href: "/about", label: "About Leaphy" }}
      />
    </>
  );
}
