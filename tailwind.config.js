/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./404.html"],
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        light: '#f8f8f8',
        accent: '#ff5c5c',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      }
    }
  },
  plugins: [],
}
