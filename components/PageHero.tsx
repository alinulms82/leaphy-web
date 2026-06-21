import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { PortableImage, PortableLink } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  cta,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-mint-sky">
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />

      <Container className="relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 font-display text-display-1 text-ink">{title}</h1>
          <p className="mt-5 lead max-w-xl">{description}</p>
          {cta && (
            <div className="mt-8">
              <PortableLink href={cta.href} className="btn-primary">
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </PortableLink>
            </div>
          )}
        </div>
        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-4xl shadow-soft ring-1 ring-ink/5">
            <PortableImage
              src={image}
              alt={imageAlt}
              eager
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-3 shadow-soft ring-1 ring-ink/5 md:block">
            <div className="rounded-xl bg-paper-mint px-3 py-2 text-xs font-medium text-brand-700">
              ePI · Structured · Multilingual
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
