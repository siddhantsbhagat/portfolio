/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "deep-bg": "#0a0a0f",
        "spider-red": "#e0182c",
        "off-white": "#f2f2f0",
        "muted-slate": "#8a8a99",
        "tracker-bg": "#0f2040",
        "tracker-border": "#285c96",
        "tracker-text": "#659ecf",
        "tracker-cyan": "#5eead4",
        "tracker-red": "#d94b4b",
        "tracker-green": "#74a874",
        "tracker-yellow": "#eab308",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        pixel: ["var(--font-pixel)"],
        terminal: ["var(--font-terminal)"],
      },
    },
  },
  plugins: [],
};
