/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        source: ["Source Code Pro", "sans-serif"],
      },
    },
  },
  plugins: [
    // ...
    //require('@tailwindcss/aspect-ratio'),
    //require("@tailwindcss/forms"),
  ],
}