import { PortableLink } from "./primitives";
import { JsonLd } from "./JsonLd";
import type { ReactNode } from "react";

export type FAQ = {
  question: string;
  answer: ReactNode;
  plainAnswer: string;
};

export function FAQSection({
  faqs,
  title = "Common questions",
}: {
  faqs: FAQ[];
  title?: string;
}) {
  return (
    <section aria-labelledby="faq" className="py-12">
      <h2 id="faq" className="text-3xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-5">
            <summary className="cursor-pointer list-none text-base font-semibold text-ink">
              {faq.question}
              <span className="float-right text-brand-700 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.plainAnswer,
            },
          })),
        }}
      />
    </section>
  );
}

export function InlineLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <PortableLink href={href} className="font-medium text-brand-700 underline">
      {children}
    </PortableLink>
  );
}
