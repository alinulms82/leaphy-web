import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { PortableImage } from "@/components/primitives";
import {
  ScanLine,
  Languages,
  HeartPulse,
  Pill,
  BellRing,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patients",
  description:
    "Scan the barcode on your medication and instantly read a clear, plain-language electronic leaflet — in your language.",
};

export default function PatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="For patients"
        title={
          <>
            Your medication.{" "}
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              Clearly explained.
            </span>
          </>
        }
        description="Scan the barcode or 2D matrix on the pack and read a structured, plain-language ePI leaflet — in your language, on any phone, completely free."
        image="/images/patient.webp"
        imageAlt="Patient reading their medication leaflet on a phone at home"
        cta={{ href: "#how", label: "How it works" }}
      />

      <section id="how" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Three simple steps"
            title="Pack to plain language in seconds."
            description="No account required to read a leaflet. Just open the app and point your camera."
          />

          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Open the Leaphy app",
                body: "Free on iOS and Android. Lightweight and privacy-first.",
              },
              {
                n: "02",
                title: "Scan the pack",
                body: "Point at the barcode or 2D Data Matrix on your medication box.",
              },
              {
                n: "03",
                title: "Read it your way",
                body: "Browse by chapter, search the text, switch to your language.",
              },
            ].map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.06}>
                <div className="card h-full">
                  <span className="font-display text-3xl text-brand-500">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What you get"
            title="A leaflet that actually helps."
          />
          <div className="mt-12">
            <FeatureGrid
              features={[
                {
                  icon: ScanLine,
                  title: "Barcode & 2D scanning",
                  description:
                    "Find the right leaflet instantly — no typing, no searching.",
                },
                {
                  icon: Languages,
                  title: "Your language",
                  description:
                    "Switch between EU languages with one tap, even mid-leaflet.",
                },
                {
                  icon: HeartPulse,
                  title: "Plain language",
                  description:
                    "Structured by chapter so you can find dosage or side effects fast.",
                },
                {
                  icon: Pill,
                  title: "Medication notes",
                  description:
                    "Save the medications you take and keep your insights nearby.",
                },
                {
                  icon: BellRing,
                  title: "Important updates",
                  description:
                    "Get notified when leaflets or safety information change.",
                },
                {
                  icon: ShieldCheck,
                  title: "Trustworthy",
                  description:
                    "Powered by official ePI data — the same source clinicians rely on.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 rounded-4xl bg-mint-sky p-6 ring-1 ring-ink/5 md:grid-cols-2 md:p-12">
            <div>
              <p className="eyebrow">Get the app</p>
              <h2 className="mt-3 font-display text-display-3 text-ink">
                Free on iOS and Android.
              </h2>
              <p className="mt-4 text-ink/65">
                Download the Leaphy app and start scanning. Currently in pilot
                across Belgium, expanding throughout the EU.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <StoreBadge name="App Store" sub="Download on the" />
                <StoreBadge name="Google Play" sub="Get it on" />
              </div>
              <p className="mt-4 text-xs text-ink/50">
                Always consult your doctor or pharmacist before using any
                medication.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft ring-1 ring-ink/5">
              <PortableImage
                src="/images/hero-scan.webp"
                alt="Phone scanning a medication pack"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Take the guesswork out of medication."
        description="Reading a leaflet shouldn't require a magnifying glass and a medical degree. Try Leaphy today."
        ctaPrimary={{ href: "/contact", label: "Get in touch" }}
        ctaSecondary={{ href: "/about", label: "About Leaphy" }}
      />
    </>
  );
}

function StoreBadge({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-soft ring-1 ring-white/10">
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10">
        <span className="font-display text-lg">L</span>
      </div>
      <div className="text-left leading-tight">
        <p className="text-[10px] uppercase tracking-wider text-white/60">
          {sub}
        </p>
        <p className="text-sm font-medium">{name}</p>
      </div>
    </div>
  );
}
