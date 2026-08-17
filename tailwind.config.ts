import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0B0F17",
          surface: "#111827",
          card: "#1E293B",
          subsurface: "#0F172A",
          border: "#334155",
          "border-subtle": "rgba(255, 255, 255, 0.08)",
          blue: {
            DEFAULT: "#0284C7",
            light: "#38BDF8",
            glow: "rgba(56, 189, 248, 0.15)",
          },
          teal: {
            DEFAULT: "#0D9488",
            light: "#14B8A6",
            glow: "rgba(20, 184, 166, 0.15)",
          },
          emerald: "#10B981",
          amber: "#F59E0B",
          rose: "#EF4444",
          muted: "#94A3B8",
          subtext: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
