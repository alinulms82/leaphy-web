import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F172A",
          soft: "#1E293B",
          mute: "#475569",
        },
        paper: {
          DEFAULT: "#F8FAFC",
          mint: "#ECFDF5",
          sky: "#F0F9FF",
        },
        brand: {
          50: "#EFFCFB",
          100: "#D6F7F4",
          200: "#AEEFEA",
          300: "#7CE2DA",
          400: "#46CFC5",
          500: "#0EA5A4",
          600: "#0B8B8A",
          700: "#0A6F6E",
          800: "#0B5957",
          900: "#0B4847",
        },
        accent: {
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-instrument)", "Georgia", "serif"],
      },
      fontSize: {
        "display-1": ["clamp(2.75rem, 6vw + 1rem, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.25rem, 4vw + 1rem, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-3": ["clamp(1.75rem, 2.5vw + 1rem, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)",
        glow: "0 10px 40px -10px rgba(14,165,164,0.45)",
        ring: "0 0 0 1px rgba(15,23,42,0.06)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.08) 1px, transparent 0)",
        "brand-gradient":
          "linear-gradient(135deg, #0EA5A4 0%, #6366F1 100%)",
        "mint-sky":
          "linear-gradient(180deg, #ECFDF5 0%, #F0F9FF 100%)",
      },
      keyframes: {
        scan: {
          "0%, 100%": { transform: "translateY(-40%)", opacity: "0.0" },
          "10%": { opacity: "0.9" },
          "50%": { transform: "translateY(40%)", opacity: "0.9" },
          "60%": { opacity: "0.0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        scan: "scan 2.6s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
