/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Noto Sans TC', sans-serif",
      },
      colors: {
        'mainred': '#FF4177',
        'maingreen': '#BAEF41',
        'subred': '#FF88AA',
        'subgreen': '#D4F588',
        'maingray': '#E7EBDD',
        'subgray': '#F3F5EE',
        'markred': '#FF1255',
        'markgreen': '#A9EB11',
      },
    },
  },
  plugins: [],
}
