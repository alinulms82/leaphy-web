import { ArrowRight, ScanLine, Sparkles } from "lucide-react";
import { Container } from "./Container";
import { PortableImage, PortableLink } from "./primitives";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-mint-sky" aria-hidden />
      <div
        className="grid-bg absolute inset-0 opacity-50"
        aria-hidden
        style={{
          maskImage:
            "radial-gradient(circle at 50% 30%, black 50%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 30%, black 50%, transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-40 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />

      <Container className="relative grid items-center gap-12 pb-16 pt-12 md:grid-cols-2 md:pb-24 md:pt-20 lg:pt-28">
        <div className="relative">
          <span
            className="chip"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Now in pilot · Belgium · Expanding across the EU
          </span>

          <h1
            className="mt-5 font-display text-display-1 text-ink"
          >
            The clearest way to read your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                medication leaflet
              </span>
              <svg
                viewBox="0 0 220 12"
                aria-hidden
                className="absolute -bottom-1 left-0 h-2 w-full text-brand-300"
              >
                <path
                  d="M2 8 C 60 2, 160 2, 218 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p
            className="lead mt-6 max-w-xl"
          >
            Leaphy is a free app for patients and healthcare providers — scan
            the pack, get a structured, multilingual ePI leaflet enriched with
            classification, metadata and trusted access context.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <PortableLink href="/patients" className="btn-primary">
              <ScanLine className="h-4 w-4" />
              Find your leaflet
            </PortableLink>
            <PortableLink href="/pharma" className="btn-secondary">
              For pharma teams
              <ArrowRight className="h-4 w-4" />
            </PortableLink>
          </div>

          <div
            className="mt-10 flex items-center gap-4 text-xs text-ink/55"
          >
            <div className="flex -space-x-2">
              {["#0EA5A4", "#6366F1", "#46CFC5"].map((c, i) => (
                <span
                  key={i}
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-paper-mint"
                  style={{ background: c }}
                />
              ))}
            </div>
            Trusted across the EU pharma chain
          </div>
        </div>

        <div
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-ink/10">
            <PortableImage
              src="/images/hero-scan.webp"
              alt="Smartphone scanning a medication pack"
              eager
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-screen"
            >
              <div className="absolute left-[28%] top-1/2 h-[120%] w-[44%] -translate-y-1/2 animate-scan bg-[linear-gradient(to_bottom,transparent,rgba(20,255,220,0.55),transparent)]" />
            </div>
          </div>

          {/* Floating cards */}
          <div
            className="absolute -left-3 top-8 hidden w-56 rounded-2xl bg-white/90 p-3 shadow-soft ring-1 ring-ink/5 backdrop-blur md:block"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand-500" />
              <p className="text-xs font-medium text-ink">Leaflet detected</p>
            </div>
            <p className="mt-1 text-[11px] text-ink/55">
              Paracetamol 500 mg · EN, NL, FR, DE
            </p>
            <div className="mt-2 grid grid-cols-3 gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-1.5 rounded-full bg-brand-100">
                  <div
                    className="h-1.5 rounded-full bg-brand-500"
                    style={{ width: `${30 + i * 25}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute -right-2 bottom-10 hidden w-52 rounded-2xl bg-ink p-3 text-white shadow-glow md:block"
          >
            <p className="text-[10px] uppercase tracking-wider text-white/60">
              Structured chapters
            </p>
            <ul className="mt-2 space-y-1.5 text-xs">
              {["Indications", "Dosage", "Side effects", "Storage"].map((s) => (
                <li
                  key={s}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1.5"
                >
                  {s}
                  <span className="text-brand-300">›</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
