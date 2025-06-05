/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Pagrindinis sans-serif šriftas visam bendram tekstui
        sans: ['"Montserrat"', 'sans-serif'],
        // Numatytasis serif šriftas (jei naudojamas)
        serif: ['Lora', 'serif'],
        // Specialus šriftas antraštėms ir pabrėžtinam tekstui (Poiret One)
        display: ['"Poiret One"', 'cursive'],
      },
    },
  },
  plugins: [],
}