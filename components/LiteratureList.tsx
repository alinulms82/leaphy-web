import { ArrowUpRight, FileText } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function LiteratureList() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Literature library"
          title="The strategy for ePI in Europe."
          description="Curated reference documents jointly developed by the EMA, EFPIA and the broader pharmaceutical industry."
        />

        <ul className="mt-10 grid gap-3 lg:grid-cols-2">
          {site.literature.map((doc, i) => (
            <Reveal as="li" key={doc.title} delay={i * 0.04}>
              <a
                href="#"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-paper-mint text-brand-600 ring-1 ring-brand-100">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{doc.title}</p>
                    <p className="mt-1 text-xs text-ink/55">{doc.meta}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/40 transition group-hover:text-brand-600" />
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
