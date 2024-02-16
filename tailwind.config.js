/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Lato"],
      },
      colors: {
        beige:"#F5F5DC",
        lightbeige:"#FAFDF3",
        green:"#577458",
        lightgreen:"#84b384",
        darkgreen:"#1f291f"
      }
    }
  },
  plugins: [],
}

