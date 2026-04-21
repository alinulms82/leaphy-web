import { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <Reveal as="li" key={f.title} delay={i * 0.05}>
          <div className="card h-full">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-paper-mint text-brand-600 ring-1 ring-brand-100">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              {f.description}
            </p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
