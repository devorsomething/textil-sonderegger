import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warm-white": "#FAFAFA",
        "soft-gray": "#E8E8E8",
        charcoal: "#333333",
        "gold-accent": "#C9A84C",
        "gold-dark": "#B8860B",
        "cream": "#F5F5F0",
        "warm-black": "#2A2A2A",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
