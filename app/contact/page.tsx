import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Mail, MapPin, Linkedin, Clock } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Leaphy team. We typically respond within one business day.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-mint-sky py-16 sm:py-24">
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />

      <Container className="relative grid gap-10 md:grid-cols-5 md:gap-14">
        <Reveal as="div" className="md:col-span-2">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-display text-display-1 text-ink">
            Let's talk.
          </h1>
          <p className="mt-5 lead">
            Use the form to reach out — for partnership, support, or general
            questions. We'll respond promptly.
          </p>

          <ul className="mt-10 space-y-4">
            <ContactItem icon={MapPin} label="Where">
              {site.location}
            </ContactItem>
            <ContactItem icon={Mail} label="Email">
              <a
                href={`mailto:${site.email}`}
                className="hover:text-brand-700"
              >
                {site.email}
              </a>
            </ContactItem>
            <ContactItem icon={Clock} label="Hours">
              Mon – Fri · 9:00 to 18:00 CET
            </ContactItem>
            <ContactItem icon={Linkedin} label="Social">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-700"
              >
                Follow Leaphy on LinkedIn
              </a>
            </ContactItem>
          </ul>
        </Reveal>

        <Reveal as="div" delay={0.1} className="md:col-span-3">
          <div className="rounded-4xl bg-white p-6 shadow-soft ring-1 ring-ink/5 sm:p-8">
            <h2 className="font-display text-2xl text-ink">Contact request</h2>
            <p className="mt-1 text-sm text-ink/55">
              Please fill in all requested data.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 rounded-2xl bg-white/70 p-4 ring-1 ring-white/60 backdrop-blur">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-paper-mint text-brand-600 ring-1 ring-brand-100">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-ink">{children}</p>
      </div>
    </li>
  );
}
