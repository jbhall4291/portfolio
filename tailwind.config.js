const withMT = require("@material-tailwind/react/utils/withMT");

// /** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      smallIphone: "375px",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
    extend: {
      fontFamily: { sans: ["Overpass", "sans-serif"] },
      colors: {
        primary: "#ff4800",
        myTheme: "#13253d",
        highlight: "#fe003a",
        blueGrey: "#263238",
      },
    },
  },
  plugins: [],
});
