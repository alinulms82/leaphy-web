import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { PortableImage } from "@/components/primitives";
import { Heart, Compass, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Leaphy is a medical-pharmaceutical information and data intelligence company based in Aalst, Belgium — empowering structured, accessible leaflets across Europe.",
};

const values = [
  {
    icon: Heart,
    title: "Patient-first",
    body: "Everything we build starts with the person who'll actually read the leaflet.",
  },
  {
    icon: ShieldCheck,
    title: "Trustworthy by design",
    body: "Approved sources, audit trails, and standards alignment — never workarounds.",
  },
  {
    icon: Compass,
    title: "Built for Europe",
    body: "Belgium today, the entire EU tomorrow — language by language, market by market.",
  },
  {
    icon: Sparkles,
    title: "Quietly innovative",
    body: "We use modern technology to make complex things feel simple, not the other way around.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Leaphy"
        title="A small Belgian team. A pan-European mission."
        description="Leaphy® is a medical-pharmaceutical information and data intelligence company building a clean, modern home for medication leaflets across the EU."
        image="/images/about-team.webp"
        imageAlt="Stylized map of Europe with connection nodes"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="eyebrow">Our story</p>
              <h2 className="mt-3 font-display text-display-2 text-ink">
                Bridging approved leaflets with the people who need them.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="space-y-4 text-ink/70">
                <p>
                  Leaphy® empowers patients and healthcare providers with
                  structured and user-friendly access to public information
                  leaflets (PILs). Currently in pilot phase, Leaphy® hosts the
                  majority of leaflets for medicines licensed and commercialised
                  in Belgium for human use.
                </p>
                <p>
                  Soon we'll encompass all European leaflets, available in
                  national languages, for widespread use by patients across the
                  continent. Once you download the Leaphy® app, you gain access
                  to a growing set of useful tools for understanding and
                  managing your medication.
                </p>
                <p>
                  We're also a pivotal partner for pharmaceutical companies
                  transforming their leaflets into structured data formats —
                  ensuring optimal usability and helping the industry meet the
                  ePI moment with confidence.
                </p>
                <p className="rounded-2xl bg-paper-mint p-4 text-sm text-brand-700 ring-1 ring-brand-100">
                  Leaphy strongly recommends consulting your doctor or
                  pharmacist before using any medication.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="Four values, no committees."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.06}>
                <div className="card h-full">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-paper-mint text-brand-600 ring-1 ring-brand-100">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 rounded-4xl bg-mint-sky p-6 ring-1 ring-ink/5 md:grid-cols-2 md:p-12">
            <div>
              <p className="eyebrow">Where we are</p>
              <h2 className="mt-3 font-display text-display-3 text-ink">
                Headquartered in Aalst, Belgium.
              </h2>
              <p className="mt-4 text-ink/65">
                20 km from Brussels, in the heart of European healthcare
                policy. Close enough to walk into the conversation, focused
                enough to ship the product.
              </p>
              <dl className="mt-6 space-y-2 text-sm text-ink/70">
                <div className="flex justify-between border-t border-ink/10 py-2">
                  <dt className="font-medium text-ink/50">Founded</dt>
                  <dd>2019</dd>
                </div>
                <div className="flex justify-between border-t border-ink/10 py-2">
                  <dt className="font-medium text-ink/50">VAT</dt>
                  <dd>BE 0711.769.370</dd>
                </div>
                <div className="flex justify-between border-t border-ink/10 py-2">
                  <dt className="font-medium text-ink/50">Status</dt>
                  <dd>Pilot · Belgium</dd>
                </div>
              </dl>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft ring-1 ring-ink/5">
              <PortableImage
                src="/images/about-team.webp"
                alt="Connected map of Europe"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's build the future of leaflets together."
        description="We work best when we work with you. Drop us a line — patients, clinicians, pharma teams, regulators, all welcome."
        ctaPrimary={{ href: "/contact", label: "Get in touch" }}
        ctaSecondary={{ href: "/epi-transformation", label: "Explore ePI" }}
      />
    </>
  );
}
