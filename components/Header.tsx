"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { HeaderView } from "./HeaderView";

export function Header() {
  const pathname = usePathname();

  return (
    <Suspense fallback={null}>
      <HeaderView currentPath={pathname} />
    </Suspense>
  );
}
