/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          greenBody: '#008080',
          grayMedium: '#7f7f7f',
          grayLight: '#c0c0c0',
          grayDark: '#4e4e4e',
          grayDarker: '#404040'
        },
        fontFamily: {
          levi: ['Levi', 'sans-serif']
        }
      },
    },
    plugins: [],
  }