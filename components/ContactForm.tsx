"use client";

import { useState, FormEvent } from "react";
import { AlertCircle, Check, Send } from "lucide-react";
import { type Locale, ui } from "@/lib/i18n";

type Fields = {
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  email: string;
  phoneCountryCode: string;
  phone: string;
  country: string;
  portfolioSize: string;
  interest: string;
  message: string;
};

const empty: Fields = {
  firstName: "",
  lastName: "",
  company: "",
  role: "",
  email: "",
  phoneCountryCode: "+32",
  phone: "",
  country: "Belgium",
  portfolioSize: "",
  interest: "Pilot conversion",
  message: "",
};

const countryOptions = [
  { flag: "🇧🇪", name: "Belgium", code: "+32", key: "belgium" },
  { flag: "🇳🇱", name: "Netherlands", code: "+31", key: "netherlands" },
  { flag: "🇫🇷", name: "France", code: "+33", key: "france" },
  { flag: "🇩🇪", name: "Germany", code: "+49", key: "germany" },
  { flag: "🇱🇺", name: "Luxembourg", code: "+352", key: "luxembourg" },
  { flag: "🇬🇧", name: "United Kingdom", code: "+44", key: "unitedKingdom" },
  { flag: "🇮🇪", name: "Ireland", code: "+353", key: "ireland" },
  { flag: "🇩🇰", name: "Denmark", code: "+45", key: "denmark" },
  { flag: "🇸🇪", name: "Sweden", code: "+46", key: "sweden" },
  { flag: "🇳🇴", name: "Norway", code: "+47", key: "norway" },
  { flag: "🇫🇮", name: "Finland", code: "+358", key: "finland" },
  { flag: "🇨🇭", name: "Switzerland", code: "+41", key: "switzerland" },
  { flag: "🇦🇹", name: "Austria", code: "+43", key: "austria" },
  { flag: "🇮🇹", name: "Italy", code: "+39", key: "italy" },
  { flag: "🇪🇸", name: "Spain", code: "+34", key: "spain" },
  { flag: "🇵🇹", name: "Portugal", code: "+351", key: "portugal" },
  { flag: "🇵🇱", name: "Poland", code: "+48", key: "poland" },
  { flag: "🇨🇿", name: "Czechia", code: "+420", key: "czechia" },
  { flag: "🇺🇸", name: "United States", code: "+1", key: "unitedStates" },
  { flag: "🌐", name: "Other", code: "", key: "other" },
];

const formLocaleText = {
  en: {
    companyPlaceholder: "Company name",
    portfolioPlaceholder: "e.g. 25 products, 8 markets",
    phoneCode: "Phone country code",
    other: "Other",
    unable: "Unable to send request.",
    countries: {
      belgium: "Belgium",
      netherlands: "Netherlands",
      france: "France",
      germany: "Germany",
      luxembourg: "Luxembourg",
      unitedKingdom: "United Kingdom",
      ireland: "Ireland",
      denmark: "Denmark",
      sweden: "Sweden",
      norway: "Norway",
      finland: "Finland",
      switzerland: "Switzerland",
      austria: "Austria",
      italy: "Italy",
      spain: "Spain",
      portugal: "Portugal",
      poland: "Poland",
      czechia: "Czechia",
      unitedStates: "United States",
      other: "Other",
    },
  },
  nl: {
    companyPlaceholder: "Bedrijfsnaam",
    portfolioPlaceholder: "bv. 25 producten, 8 markten",
    phoneCode: "Landcode telefoon",
    other: "Andere",
    unable: "Kan de aanvraag niet versturen.",
    countries: {
      belgium: "Belgie",
      netherlands: "Nederland",
      france: "Frankrijk",
      germany: "Duitsland",
      luxembourg: "Luxemburg",
      unitedKingdom: "Verenigd Koninkrijk",
      ireland: "Ierland",
      denmark: "Denemarken",
      sweden: "Zweden",
      norway: "Noorwegen",
      finland: "Finland",
      switzerland: "Zwitserland",
      austria: "Oostenrijk",
      italy: "Italie",
      spain: "Spanje",
      portugal: "Portugal",
      poland: "Polen",
      czechia: "Tsjechie",
      unitedStates: "Verenigde Staten",
      other: "Andere",
    },
  },
  fr: {
    companyPlaceholder: "Nom de l'entreprise",
    portfolioPlaceholder: "ex. 25 produits, 8 marches",
    phoneCode: "Indicatif telephonique",
    other: "Autre",
    unable: "Impossible d'envoyer la demande.",
    countries: {
      belgium: "Belgique",
      netherlands: "Pays-Bas",
      france: "France",
      germany: "Allemagne",
      luxembourg: "Luxembourg",
      unitedKingdom: "Royaume-Uni",
      ireland: "Irlande",
      denmark: "Danemark",
      sweden: "Suede",
      norway: "Norvege",
      finland: "Finlande",
      switzerland: "Suisse",
      austria: "Autriche",
      italy: "Italie",
      spain: "Espagne",
      portugal: "Portugal",
      poland: "Pologne",
      czechia: "Tchequie",
      unitedStates: "Etats-Unis",
      other: "Autre",
    },
  },
  de: {
    companyPlaceholder: "Unternehmensname",
    portfolioPlaceholder: "z. B. 25 Produkte, 8 Maerkte",
    phoneCode: "Telefon-Laendercode",
    other: "Andere",
    unable: "Anfrage konnte nicht gesendet werden.",
    countries: {
      belgium: "Belgien",
      netherlands: "Niederlande",
      france: "Frankreich",
      germany: "Deutschland",
      luxembourg: "Luxemburg",
      unitedKingdom: "Vereinigtes Koenigreich",
      ireland: "Irland",
      denmark: "Daenemark",
      sweden: "Schweden",
      norway: "Norwegen",
      finland: "Finnland",
      switzerland: "Schweiz",
      austria: "Oesterreich",
      italy: "Italien",
      spain: "Spanien",
      portugal: "Portugal",
      poland: "Polen",
      czechia: "Tschechien",
      unitedStates: "Vereinigte Staaten",
      other: "Andere",
    },
  },
} as const;

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const t = ui[locale].form;
  const l = formLocaleText[locale];
  const [fields, setFields] = useState<Fields>(empty);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!fields.email.includes("@") || !fields.firstName || !fields.company || !fields.message) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        await response.json().catch(() => null);
        throw new Error(l.unable);
      }

      setDone(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : t.fallback
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-3xl bg-paper-mint p-8 text-center ring-1 ring-brand-100">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-white">
          <Check className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-display text-2xl text-ink">
          {t.thanks}, {fields.firstName}.
        </h3>
        <p className="mt-2 text-sm text-ink/65">
          {t.received}
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-2xl bg-white px-4 py-3 text-sm text-ink ring-1 ring-ink/10 placeholder:text-ink/40 outline-none transition focus:ring-2 focus:ring-brand-400";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.firstName} required>
          <input
            required
            value={fields.firstName}
            onChange={update("firstName")}
            placeholder="Jane"
            className={inputCls}
          />
        </Field>
        <Field label={t.lastName} required>
          <input
            required
            value={fields.lastName}
            onChange={update("lastName")}
            placeholder="Doe"
            className={inputCls}
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.company} required>
          <input
            required
            value={fields.company}
            onChange={update("company")}
            placeholder={l.companyPlaceholder}
            className={inputCls}
          />
        </Field>
        <Field label={t.role}>
          <select
            value={fields.role}
            onChange={update("role")}
            className={inputCls}
          >
            <option value="">{t.selectRole}</option>
            {t.roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.email} required>
          <input
            type="email"
            required
            value={fields.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={inputCls}
          />
        </Field>
        <Field label={t.phone}>
          <div className="grid grid-cols-[112px_1fr] gap-2">
            <select
              value={fields.phoneCountryCode}
              onChange={update("phoneCountryCode")}
              className={inputCls}
              aria-label={l.phoneCode}
            >
              {countryOptions.map((country) => (
                <option key={`${country.name}-${country.code}`} value={country.code}>
                  {country.flag} {country.code || l.other}
                </option>
              ))}
            </select>
            <input
              type="tel"
              value={fields.phone}
              onChange={update("phone")}
              placeholder={t.phoneNumber}
              className={inputCls}
            />
          </div>
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.country}>
          <select
            value={fields.country}
            onChange={update("country")}
            className={inputCls}
          >
            {countryOptions.map((country) => (
              <option key={country.name} value={country.name}>
                {country.flag} {l.countries[country.key as keyof typeof l.countries]}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t.portfolioSize}>
          <input
            value={fields.portfolioSize}
            onChange={update("portfolioSize")}
            placeholder={l.portfolioPlaceholder}
            className={inputCls}
          />
        </Field>
      </div>
      <Field label={t.interest}>
        <select
          value={fields.interest}
          onChange={update("interest")}
          className={inputCls}
        >
          {t.interests.map((interest) => (
            <option key={interest}>{interest}</option>
          ))}
        </select>
      </Field>
      <Field label={t.message} required>
        <textarea
          required
          value={fields.message}
          onChange={update("message")}
          placeholder={t.messagePlaceholder}
          rows={5}
          className={inputCls + " resize-none"}
        />
      </Field>

      {error && (
        <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-900">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            {error}{" "}
            <a href="mailto:info@leaphy.com" className="font-semibold underline">
              info@leaphy.com
            </a>
            .
          </p>
        </div>
      )}

      <div className="flex items-center justify-between gap-3 pt-2">
        <p className="text-xs text-ink/50">
          {t.response}
        </p>
        <button
          type="submit"
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          data-cta="contact-form-submit"
          disabled={submitting}
        >
          <Send className="h-4 w-4" />
          {submitting ? t.sending : t.submit}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink/60">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {children}
    </label>
  );
}
