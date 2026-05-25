import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm sand/cream — primary backgrounds
        shell: {
          50: "#FAF6ED",
          100: "#F5F1E8",
          200: "#EAE3D2",
        },
        // Pale slate-blue — soft surfaces, borders, chips
        mist: {
          50: "#F0F4F8",
          100: "#E4ECF2",
          200: "#D0DDE8",
          300: "#B5C8D6",
          400: "#8DA9C4",
        },
        // Deep navy — headlines, anchors, footer
        navy: {
          500: "#415A77",
          600: "#2C4159",
          700: "#134074",
          800: "#0B2545",
          900: "#061B33",
        },
        // Body text neutrals (cool gray)
        slate: {
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        // Coral accent — CTAs & key highlights only (~10-15% of design)
        coral: {
          DEFAULT: "#F26C4F",
          light: "#F58F7D",
          dark: "#D9543A",
          deep: "#A93A26",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Oswald", "Impact", "sans-serif"],
      },
      backgroundImage: {
        "shore-gradient":
          "linear-gradient(180deg, #E4ECF2 0%, #F0F4F8 35%, #F5F1E8 100%)",
        "coral-gradient":
          "linear-gradient(135deg, #F58F7D 0%, #F26C4F 60%, #D9543A 100%)",
        "navy-gradient":
          "linear-gradient(135deg, #134074 0%, #0B2545 100%)",
      },
      boxShadow: {
        glow: "0 8px 24px -8px rgba(242,108,79,0.45)",
        card: "0 10px 30px -12px rgba(11,37,69,0.18)",
        soft: "0 2px 10px -2px rgba(11,37,69,0.08)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
