"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";

export function NewsletterForm({
  dark = false,
  locale = "en",
}: {
  dark?: boolean;
  locale?: "en" | "nl" | "fr" | "de";
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const copy = labels[locale];

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
        {copy.done}
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
        {copy.label}
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={copy.placeholder}
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
        aria-label={copy.submit}
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

const labels = {
  en: {
    done: "Thanks — you're on the list.",
    label: "Email address",
    placeholder: "Your email",
    submit: "Subscribe",
  },
  nl: {
    done: "Bedankt — u staat op de lijst.",
    label: "E-mailadres",
    placeholder: "Uw e-mail",
    submit: "Inschrijven",
  },
  fr: {
    done: "Merci — vous êtes inscrit.",
    label: "Adresse e-mail",
    placeholder: "Votre e-mail",
    submit: "S'inscrire",
  },
  de: {
    done: "Danke — Sie sind auf der Liste.",
    label: "E-Mail-Adresse",
    placeholder: "Ihre E-Mail",
    submit: "Abonnieren",
  },
} as const;
