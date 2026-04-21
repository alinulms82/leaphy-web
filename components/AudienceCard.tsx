import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type Audience = {
  slug: string;
  title: string;
  tag: string;
  blurb: string;
  image: string;
};

export function AudienceCard({ a }: { a: Audience }) {
  return (
    <Link
      href={`/${a.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-glow"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={a.image}
          alt={a.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute left-4 top-4 chip bg-white/90 text-brand-700 ring-white/40">
          {a.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-ink">{a.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">{a.blurb}</p>
        <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-brand-600 transition group-hover:gap-2.5">
          Explore
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
