import { PortableLink } from "./primitives";

export function Logo({
  compact = false,
  header = false,
}: {
  compact?: boolean;
  header?: boolean;
}) {
  return (
    <PortableLink
      href="/"
      className="group inline-flex items-center"
      aria-label="Leaphy home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/leaphy-logo.png"
        alt="Leaphy"
        className={
          header
            ? "h-9 w-auto sm:h-10"
            : compact
              ? "h-10 w-auto"
              : "h-11 w-auto sm:h-12"
        }
      />
    </PortableLink>
  );
}
