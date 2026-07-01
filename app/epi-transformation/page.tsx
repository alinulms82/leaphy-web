import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { PortableImage } from "@/components/primitives";
import {
  FileText,
  GitBranch,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ePI Transformation",
  description:
    "How Leaphy turns approved paper leaflets into structured, multilingual electronic product information across the EU.",
};

const pipeline = [
  {
    icon: FileText,
    title: "Approved leaflet",
    body: "We start from the latest regulatory-approved PDF/Word leaflet from the marketing authorisation holder.",
  },
  {
    icon: GitBranch,
    title: "Structured parsing",
    body: "Each leaflet is parsed into chapters and fields using our ePI templates aligned with ISO IDMP.",
  },
  {
    icon: Database,
    title: "Enriched & stored",
    body: "We attach ATC5 classification, structured metadata, language, market and product context. Stored securely on Azure.",
  },
  {
    icon: Globe,
    title: "Multilingual sync",
    body: "Content is delivered in all relevant EU languages, with version control and change tracking.",
  },
  {
    icon: Smartphone,
    title: "Multichannel delivery",
    body: "Pushed to the Leaphy app, your website, partner channels — or directly via API.",
  },
];

export default function EpiPage() {
  return (
    <>
      <PageHero
        eyebrow="ePI Transformation"
        title="Paper leaflets, reimagined as structured digital data."
        description="Electronic Product Information is the future of medication leaflets in Europe. Leaphy is the platform that gets you there — without disrupting your workflow."
        image="/images/epi-transform.webp"
        imageAlt="Illustration of a paper leaflet transforming into structured digital data"
        cta={{ href: "#pipeline", label: "See the pipeline" }}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why ePI"
            title="A pan-European push for digital leaflets."
            description="Endorsed by the EMA, EFPIA, AESGP, PGEU and Medicines for Europe — ePI brings clarity, accessibility and safety to every leaflet, in every language."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                stat: "1 in 3",
                label:
                  "patients struggle to read paper leaflets due to font size and density.",
              },
              {
                stat: "26",
                label:
                  "official EU languages — ePI keeps every translation perfectly in sync.",
              },
              {
                stat: "Real-time",
                label:
                  "safety updates reach patients and HCPs the moment they're approved.",
              },
            ].map((c, i) => (
              <Reveal key={c.stat} delay={i * 0.06}>
                <div className="card h-full">
                  <p className="font-display text-4xl text-brand-600">{c.stat}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {c.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="pipeline" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Leaphy pipeline"
            title="From approval to patient — in five steps."
            description="A repeatable, audit-friendly process that turns regulatory documents into structured ePI ready for every channel."
          />

          <ol className="mt-12 space-y-4">
            {pipeline.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.05}>
                <div className="grid gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6 sm:p-6">
                  <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-paper-mint text-brand-600 ring-1 ring-brand-100">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                      {step.body}
                    </p>
                  </div>
                  <div
                    className="hidden h-2 w-2 rounded-full bg-brand-300 sm:block"
                    aria-hidden
                  />
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Compliance</p>
              <h2 className="mt-3 font-display text-display-2 text-ink">
                Built around the standards that matter.
              </h2>
              <p className="mt-4 text-ink/65">
                Our metadata follows the Falsified Medicines Directive (FMD) and
                ISO IDMP, so every product is identified consistently across
                markets — and every update is traceable.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "FMD compliant",
                  "ISO IDMP aligned",
                  "EMA-style chapters",
                  "GDPR by default",
                  "Azure-hosted",
                  "Version controlled",
                ].map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 rounded-2xl bg-paper px-4 py-2.5 text-sm text-ink"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-square overflow-hidden rounded-4xl shadow-soft ring-1 ring-ink/5">
                <PortableImage
                  src="/images/about-team.webp"
                  alt="Map of Europe with connected nodes"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        title="Start your ePI transformation."
        description="Whether you're at strategy or rollout — we'd love to show you what the next generation of medication information looks like."
        ctaPrimary={{ href: "/contact", label: "Talk to our team" }}
        ctaSecondary={{ href: "/pharma", label: "Pharma platform" }}
      />
    </>
  );
}
