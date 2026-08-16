import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        brand: {
          DEFAULT: "#0284c7",
          light: "#38bdf8",
          dark: "#0369a1",
        },
        alfalak: {
          bg: "#ffffff",
          "bg-alt": "#f0f9ff",
          "bg-section": "#e0f2fe",
          accent: "#0284c7",
          "accent-light": "#38bdf8",
          text: "#0c1a2e",
          "text-secondary": "#334155",
          border: "#bae6fd",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-barlow)", "Barlow Condensed", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "Cairo", "sans-serif"],
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.06)",
        md: "0 4px 16px rgba(2,132,199,0.08)",
        lg: "0 8px 32px rgba(2,132,199,0.10)",
        card: "0 2px 12px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 24px rgba(2,132,199,0.15)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-rtl": "marquee-rtl 40s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rtl": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
