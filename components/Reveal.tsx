import { CSSProperties, ReactNode, createElement } from "react";
import { cn } from "@/lib/cn";

export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header";
}) {
  const style = {
    "--reveal-delay": `${delay}s`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return createElement(
    as,
    { className: cn("reveal", className), style },
    children
  );
}
