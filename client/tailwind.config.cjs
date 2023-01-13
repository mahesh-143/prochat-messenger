/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Inter : "Inter, sans-serif",
      Script : "Meow Script, cursive",
    },
    extend: {
      colors: {
        accent : "var(--clr-accent)",
        input : "var(--clr-input)",
        body : "var(--clr-body)",
        dark : "var(--clr-dark-100)",
        darker : "var(--clr-dark-200)",
        error : "var(--clr-error)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
