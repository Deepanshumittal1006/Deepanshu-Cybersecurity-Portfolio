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
        "electric-blue": "#00A8FF",
        cyan: {
          DEFAULT: "#00F5D4",
          50: "#e5fffa",
          100: "#b3ffef",
          200: "#80ffe4",
          300: "#4dffd8",
          400: "#1affcd",
          500: "#00F5D4",
          600: "#00ccb0",
          700: "#009984",
          800: "#006658",
          900: "#00332c",
          950: "#001a16",
        },
        purple: {
          DEFAULT: "#7C3AED",
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7C3AED",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        cyber: {
          bg: "#070B14",
          surface: "#0B132B",
          card: "#0B132B",
          subsurface: "#0B132B",
          border: "rgba(255, 255, 255, 0.1)",
          "border-subtle": "rgba(255, 255, 255, 0.05)",
          cyan: "#00F5D4",
          "electric-blue": "#00A8FF",
          purple: "#7C3AED",
          blue: {
            DEFAULT: "#00A8FF",
            light: "#38BDF8",
            glow: "rgba(0, 168, 255, 0.15)",
          },
          teal: {
            DEFAULT: "#00F5D4",
            light: "#14B8A6",
            glow: "rgba(0, 245, 212, 0.15)",
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
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
    },
  },
  plugins: [],
};

export default config;
