/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
      },
    },
  },
  plugins: [],
};
