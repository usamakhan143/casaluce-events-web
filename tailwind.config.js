/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': '#9A9D7E',
        'cream': '#F6F0E7',
        'brown': '#B47250',
        'charcoal': '#454648',
      },
      fontFamily: {
        'seasons': ['FONTSPRING DEMO - The Seasons', 'system-ui', 'sans-serif'],
        'gotham': ['Gotham', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
