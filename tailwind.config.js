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
        'seasons': ['The Seasons', 'serif'],
        'seasons-light': ['The Seasons', 'serif'],
        'seasons-bold': ['The Seasons', 'serif'],
        'gotham': ['Gotham', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'footlight': ['The Seasons', 'serif'],
        'forum': ['The Seasons', 'serif'],
      },
    },
  },
  plugins: [],
}
