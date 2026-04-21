import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2"
      aria-label="Leaphy home"
    >
      <span className="grid h-9 w-9 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow ring-1 ring-white/40">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
        >
          <path
            d="M27 5c0 9.94-6.06 17-15 17a13 13 0 0 1-3.05-.36C8.74 27.6 7 30 7 30H4c0-7 4-12 9-15a14.7 14.7 0 0 1 4.5-2.2c.55-.18.4-1-.18-.96A18.5 18.5 0 0 0 9 14C9 8.5 14 5 22 5h5Z"
            fill="currentColor"
          />
          <rect
            x="13.2"
            y="13.2"
            width="9"
            height="3.8"
            rx="1.9"
            transform="rotate(-35 13.2 13.2)"
            fill="white"
            opacity="0.9"
          />
        </svg>
      </span>
      {!compact && (
        <span className="font-display text-xl font-medium tracking-tight text-current">
          Leaphy
          <span className="text-brand-400">.</span>
        </span>
      )}
    </Link>
  );
}
