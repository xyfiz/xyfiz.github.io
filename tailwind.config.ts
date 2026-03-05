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
        void: "#060407",
        surface: "#0e0b12",
        "surface-hi": "#16121c",
        snow: "#f2ede0",
        muted: "#7a7060",
        gold: {
          DEFAULT: "#c8991f",
          light: "#f0c040",
          dim: "#9a7415",
          faint: "#3a2c08",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "roar-ring": "roar-ring 2.4s ease-out infinite",
        "gold-breathe": "gold-breathe 4s ease-in-out infinite",
        "slam-up": "slam-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "marquee-left": "marquee-left 35s linear infinite",
        "marquee-right": "marquee-right 28s linear infinite",
      },
      keyframes: {
        "roar-ring": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(2.8)", opacity: "0" },
        },
        "gold-breathe": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        "slam-up": {
          "0%": { transform: "translateY(60px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
