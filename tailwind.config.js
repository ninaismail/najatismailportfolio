/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      colors: {
      bg: "rgb(248, 250, 252)",
      content: "rgb(71, 85, 105)",
      darkcontent:"rgb(226, 232, 240)",
      accent1: "rgb(179, 245, 179)",
      accent2: "rgb( 87, 116, 88)",
      accent3: "rgb(31, 41, 31)",
      darkaccent1: "rgb(154, 229, 154)",
      darkaccent2: "rgb(55, 83, 63)",
      darkaccent3: "rgb(19, 28, 19)"
      },
    }
  },
  plugins: ["prettier-plugin-tailwindcss"]
}

