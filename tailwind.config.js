/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["zillaslab"],
      },
      colors: {
        beige:"#F4E4C9",
        olive:"#6E6C54",
        darkolive:"#413D24",
        darkblue:"#2A2D32",
        copper:"#894C2C",
        lightbeige:"#FAFDF3",
        lightblue:"#B1B9BC"
      }
    }
  },
  plugins: [],
}

