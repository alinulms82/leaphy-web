import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { PortableLink } from "./primitives";

export function CTASection({
  title,
  description,
  ctaPrimary,
  ctaSecondary,
}: {
  title: string;
  description: string;
  ctaPrimary: { href: string; label: string };
  ctaSecondary?: { href: string; label: string };
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-ink px-6 py-14 text-white shadow-soft sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-display-2">{title}</h2>
              <p className="mt-4 text-base text-white/70 sm:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PortableLink
                  href={ctaPrimary.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition hover:bg-brand-300"
                >
                  {ctaPrimary.label}
                  <ArrowRight className="h-4 w-4" />
                </PortableLink>
                {ctaSecondary && (
                  <PortableLink
                    href={ctaSecondary.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15"
                  >
                    {ctaSecondary.label}
                  </PortableLink>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
