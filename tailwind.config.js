/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff4800",
        myTheme: "#13253d",
        highlight: "#fe003a"
      },
    },
  },
  plugins: [],
};
