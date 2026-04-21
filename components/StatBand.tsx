import { Container } from "./Container";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function StatBand() {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <Reveal>
          <dl className="grid gap-px overflow-hidden rounded-3xl bg-ink/5 ring-1 ring-ink/5 sm:grid-cols-2 lg:grid-cols-4">
            {site.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-1 bg-white px-6 py-7 text-center"
              >
                <dt className="font-display text-3xl text-ink sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="text-xs font-medium uppercase tracking-wider text-ink/50">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
