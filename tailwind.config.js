/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        // bodyColor: "#212428",
        bodyColor: "#111827",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #111827, #1f2937)",
        // designColor: "#ff014f",
        designColor: "#00ACC1",
      },
      boxShadow: {
        shadowOne: "0px 0px 15px #20304f, 0px 0px 15px #20304f",
      },

      
    },
  },
  plugins: [],
};
