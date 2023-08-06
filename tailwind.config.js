/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
        "material-light": {
          "on-background": "#1f1f1f",
          "background": "#fff",
          "on-surface": "#1f1f1f",
          "surface": "#f8fafd",
          "surface-2": "#f3f6fc",
          "on-primary": "#fff",
          "primary": "#0b57d0",
          "secondary": "#c2e7ff",
          "on-secondary": "#001d35",
          "primary-hover": "#d3e3fd",
          "surface-hover": "#eff3fa",
        },
        "material-dark": {
          "on-background": "#e3e3e3",
          "background": "#1f1f1f",
          "on-surface": "#e3e3e3",
          "surface": "#28292a",
          "surface-2": "#2d2f31",
          "on-primary": "#062e6f",
          "primary": "#a8c7fa",
          "secondary": "#004a77",
          "on-secondary": "#c2e7ff",
          "primary-hover": "#d3e3fd",
          "surface-hover": "#333438",
        },
      },
      width: {
        'screen': '100dvw',
      },
      height: {
        'screen': '100dvh',
      },
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
  },
  plugins: [require("tailwindcss-animate")],
}