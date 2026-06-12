import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0B10",
        "bg-1": "#0F1016",
        "bg-2": "#08090C",
        "bg-3": "#0E0F15",
        sheen: "#16171F",
        gold: "#F4B71E",
        "gold-deep": "#8A6E1A",
        muted: "#BCBFC9",
        "muted-2": "#9094A0",
        "muted-3": "#A9ACB6",
        line: "#24252C",
        card: "#13141A",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        kicker: "0.18em",
      },
      animation: {
        "pulse-live": "pulse-live 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        "pulse-live": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        gold: "0 0 24px rgba(244, 183, 30, 0.25)",
        "gold-lg": "0 0 48px rgba(244, 183, 30, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
