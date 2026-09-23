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
        canvas: "#FAFAF8",
        ink: "#1C1917",
        accent: "#0E9F8A",
        "accent-hover": "#0B6E5F",
        "accent-glow": "#2DD4A8",
        dark: "#131110",
        "dark-mid": "#1A1714",
        amber: "#D97706",
        "warm-100": "#F5F5F0",
        "warm-200": "#E8E6E1",
        "warm-300": "#D4D0C8",
        "warm-400": "#A8A29E",
      },
      fontFamily: {
        display: ['Georgia', '"Times New Roman"', 'serif'],
        body: ['system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      }
    },
  },
  plugins: [],
};
export default config;
