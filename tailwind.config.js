/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        font: ['DM Serif Display']
      },
      background:{
        'fundoLogin': "url('./src/img/backgroundLogin.webp')"
      }
    },
  },
  plugins: [],
}

