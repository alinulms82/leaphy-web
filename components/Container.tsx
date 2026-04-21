import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

export function Container({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("container", className)} {...rest}>
      {children}
    </div>
  );
}
