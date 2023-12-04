/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ["Metropolis", "sans-serif"],
      },
      colors: {
        primary: '#FF1472',
        secondary: '#6300DF',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

