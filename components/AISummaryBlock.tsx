export function AISummaryBlock({
  bullets,
  title = "Overview",
}: {
  bullets: readonly string[];
  title?: string;
}) {
  return (
    <section
      aria-labelledby="page-summary"
      className="border-l-2 border-brand-600 pl-5"
    >
      <h2 id="page-summary" className="text-base font-semibold text-ink">
        {title}
      </h2>
      <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-600" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
