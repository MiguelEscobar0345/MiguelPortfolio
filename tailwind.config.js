/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4E6C50",
          dark: "#395144",
          accent: "#AA8B56",
          soft: "#F0EBCE"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
