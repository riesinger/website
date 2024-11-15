/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    typography: {
      DEFAULT: {
        css: {
          code: {
            background: "rgba(0, 0, 0, 0.075)",
            "border-radius": "3px",
            display: "inline-block",
            padding: "0px 4px",
          },
          "code::before": {
            content: "",
            display: "none",
          },
          "code::after": {
            content: "",
            display: "none",
          },
          "pre code": {
            background: "inherit",
          },
        },
      },
      invert: {
        css: {
          code: {
            background: "rgba(255, 255, 255, 0.1)",
            "border-radius": "3px",
            display: "inline-block",
            padding: "0px 4px",
          },
          "code::before": {
            content: "",
            display: "none",
          },
          "code::after": {
            content: "",
            display: "none",
          },
          "pre code": {
            background: "inherit",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
