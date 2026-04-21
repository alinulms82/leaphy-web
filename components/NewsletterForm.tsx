"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
    setEmail("");
  };

  if (done) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-3 text-sm",
          dark ? "bg-white/10 text-white" : "bg-paper-mint text-brand-700"
        )}
      >
        <Check className="h-4 w-4" />
        Thanks — you’re on the list.
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex items-center gap-1 rounded-full p-1 ring-1 transition focus-within:ring-2",
        dark
          ? "bg-white/10 ring-white/15 focus-within:ring-brand-300"
          : "bg-white ring-ink/10 focus-within:ring-brand-400"
      )}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className={cn(
          "min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none",
          dark ? "text-white placeholder:text-white/40" : "text-ink placeholder:text-ink/40"
        )}
      />
      <button
        type="submit"
        className={cn(
          "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition",
          dark
            ? "bg-white text-ink hover:bg-brand-300"
            : "bg-ink text-white hover:bg-brand-700"
        )}
        aria-label="Subscribe"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
