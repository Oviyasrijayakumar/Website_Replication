/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5267FE",
          light: "#bdebff",
          purple: "#b89ddd",
        },
        dark: {
          DEFAULT: "#15161c",
          light: "#212329",
        },
        "gray-dark-7": "#121212",
        "gray-dark-2": "#64748b",
        "gray-light": "#f9f9f9",
        "black-7": "#1e293b",
      },
      keyframes: {
        gradientProgress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        heroGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient-progress": "gradientProgress 7s linear infinite",
        "hero-gradient": "heroGradient 15s ease infinite",
      },
      screens: {
        mdx: "960px",
      },
    },
  },
  plugins: [],
};
