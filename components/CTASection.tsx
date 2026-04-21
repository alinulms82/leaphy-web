import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

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
          <div className="relative overflow-hidden rounded-4xl bg-ink px-6 py-14 text-white shadow-soft sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-accent-500/40 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-display-2">{title}</h2>
              <p className="mt-4 text-base text-white/70 sm:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={ctaPrimary.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition hover:bg-brand-300"
                >
                  {ctaPrimary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15"
                  >
                    {ctaSecondary.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
