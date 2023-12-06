/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        titleFonts : ['Fleur De Leah',' sans-serif'],
        h1Fonts : ['Lato',' sans-serif'],
        h2Fonts: ['Noto Sans Tangsa'," sans-serif"],
        h3Fonts: [ 'Roboto Slab', "serif"],
        pFonts: ['Young Serif', 'serif'],
        Fonts:['Barlow Condensed', 'sans-serif']
      },
    },
  },
  plugins: [],
}