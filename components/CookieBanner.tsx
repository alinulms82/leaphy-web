"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const KEY = "leaphy-cookies";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) {
      const t = setTimeout(() => setShow(true), 700);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (value: "all" | "essential") => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-sm">
      <div className="glass relative overflow-hidden p-5">
        <button
          onClick={() => accept("essential")}
          aria-label="Dismiss"
          className="absolute right-3 top-3 rounded-full p-1 text-ink/40 transition hover:bg-paper hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>
        <h3 className="text-sm font-semibold text-ink">We value your privacy</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-ink/65">
          We use cookies to provide a better experience. You can accept all or
          stick with essentials only.
        </p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => accept("essential")}
            className="flex-1 rounded-full bg-paper px-3 py-2 text-xs font-medium text-ink ring-1 ring-ink/10 transition hover:bg-white"
          >
            Essential only
          </button>
          <button
            onClick={() => accept("all")}
            className="flex-1 rounded-full bg-ink px-3 py-2 text-xs font-medium text-white transition hover:bg-brand-700"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
