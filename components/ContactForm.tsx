"use client";

import { useState, FormEvent } from "react";
import { Check, Send } from "lucide-react";

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const empty: Fields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [done, setDone] = useState(false);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fields.email.includes("@") || !fields.firstName || !fields.message) return;
    setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-3xl bg-paper-mint p-8 text-center ring-1 ring-brand-100">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-white">
          <Check className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-display text-2xl text-ink">Thanks, {fields.firstName}.</h3>
        <p className="mt-2 text-sm text-ink/65">
          We received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-2xl bg-white px-4 py-3 text-sm text-ink ring-1 ring-ink/10 placeholder:text-ink/40 outline-none transition focus:ring-2 focus:ring-brand-400";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" required>
          <input
            required
            value={fields.firstName}
            onChange={update("firstName")}
            placeholder="Jane"
            className={inputCls}
          />
        </Field>
        <Field label="Last name">
          <input
            value={fields.lastName}
            onChange={update("lastName")}
            placeholder="Doe"
            className={inputCls}
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" required>
          <input
            type="email"
            required
            value={fields.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={inputCls}
          />
        </Field>
        <Field label="Phone">
          <input
            type="tel"
            value={fields.phone}
            onChange={update("phone")}
            placeholder="+32 ..."
            className={inputCls}
          />
        </Field>
      </div>
      <Field label="Message" required>
        <textarea
          required
          value={fields.message}
          onChange={update("message")}
          placeholder="How can we help?"
          rows={5}
          className={inputCls + " resize-none"}
        />
      </Field>

      <div className="flex items-center justify-between gap-3 pt-2">
        <p className="text-xs text-ink/50">We typically respond within one business day.</p>
        <button type="submit" className="btn-primary">
          <Send className="h-4 w-4" />
          Send message
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
