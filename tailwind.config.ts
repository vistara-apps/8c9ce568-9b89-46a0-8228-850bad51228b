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
        bg: "var(--color-bg)",
        fg: "var(--color-fg)",
        surface: "var(--color-surface)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        success: "var(--color-success)",
        danger: "var(--color-danger)",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "16px",
      },
      boxShadow: {
        card: "0 8px 24px hsla(221, 83%, 53%, 0.12)",
        tooltip: "0 4px 12px hsla(0,0%,0%,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
