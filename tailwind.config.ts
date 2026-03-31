import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: "#1a0a0a",
        surface: "#1e0f0f",
        "surface-2": "#271616",
        "surface-3": "#301c1c",
        red: "#c23616",
        ember: "#e67e22",
        amber: "#f0a500",
        glow: "#ffeaa7",
        "ash-800": "#2d2d2d",
        "ash-600": "#555555",
        "ash-400": "#999999",
        "ash-200": "#cccccc",
        "ash-100": "#e8e8e8",
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["Noto Sans JP", "-apple-system", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
