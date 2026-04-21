# Leaphy — modern marketing site

A clean, mobile-first rebuild of [leaphy.com](https://www.leaphy.com/), the European platform for electronic medication leaflets (ePI). Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Imagery is AI-generated.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** with custom design tokens (brand teal, indigo accent, mint-sky surfaces)
- **Framer Motion** for tasteful scroll-reveal animations and the animated hero scan beam
- **lucide-react** icon set
- `next/font` (Inter for body, Instrument Serif for display headings)
- `next/image` for optimized AVIF/WebP delivery

## Pages

| Route                    | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| `/`                      | Home — hero, audiences grid, platform, literature, CTA |
| `/patients`              | How-it-works steps, app features, store badges         |
| `/physicians`            | HCP feature grid, ATC5 / pricing positioning           |
| `/pharmacists`           | Counter-focused feature grid + push communication      |
| `/pharma`                | Platform features, Azure / FMD / IDMP, CTA to demo     |
| `/epi-transformation`    | Why ePI, 5-step pipeline, compliance grid              |
| `/about`                 | Story, values, location card                           |
| `/contact`               | Contact form (UI), location & social card              |

## Project layout

```
app/                 # App Router pages and layout
components/          # Reusable UI primitives (Hero, AudienceCard, …)
lib/                 # site config + small utils
public/images/       # AI-generated imagery + logo SVG
tailwind.config.ts   # Design tokens
```

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

The full site is statically prerendered (`○ (Static)` for all pages).

## Deploy to Vercel

This is a stock Next.js App Router project — Vercel auto-detects everything.

1. Push this repo to GitHub (already done if you cloned it from there).
2. In the [Vercel dashboard](https://vercel.com/new), **Import Git Repository** → pick this repo.
3. Leave the defaults:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`
4. No environment variables required for the marketing site.
5. Hit **Deploy**.

Or via CLI:

```bash
npm i -g vercel
vercel        # link the project
vercel --prod # ship
```

## Design tokens

| Token              | Value     | Usage                                |
| ------------------ | --------- | ------------------------------------ |
| `brand-500`        | `#0EA5A4` | Primary teal                         |
| `accent-500`       | `#6366F1` | Indigo accent / gradient pair        |
| `ink`              | `#0F172A` | Headings, dark CTAs                  |
| `paper`            | `#F8FAFC` | Subtle surfaces                      |
| `paper-mint`       | `#ECFDF5` | Hero / chip backgrounds              |
| `paper-sky`        | `#F0F9FF` | Hero gradient pair                   |
| Display font       | Instrument Serif | Hero / section titles         |
| Body font          | Inter     | Everything else                      |

## Imagery

All imagery in `public/images/` was generated for this rebuild and is project-licensed.

- `hero-scan.webp` — phone scanning a 2D matrix on a medication pack
- `patient.webp` `physician.webp` `pharmacist.webp` `pharma-lab.webp` — audience portraits
- `epi-transform.webp` — paper → structured data illustration
- `about-team.webp` — connected map of Europe with Belgium highlighted
- `og-image.webp` — 1200×630 social share card
- `icon-leaf.svg` — Leaphy mark

## What's intentionally out of scope

- Real form submission (newsletter + contact return UI-only success states; wire up Resend / Formspree as you like)
- Real i18n (the language switcher is a UI placeholder; add `next-intl` to enable)
- Vendor cookie consent (a simple in-house banner is included)

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`)
- WCAG AA color contrast on all text-on-surface combinations
- Visible focus rings, `prefers-reduced-motion` respected, keyboard-friendly nav drawer
