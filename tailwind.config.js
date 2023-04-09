/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  fontFamily: {
    bodyFont: ["Poppins", "sans-serif"],
    titleFont: ["Montserrat", "sans-serif"],
  },
  colors: {
    bodyColor: "#111827",
    lightText: "#c4cfde",
    boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
    designColor: "#00ACC1",
  },
  plugins: [],
};
