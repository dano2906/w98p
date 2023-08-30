/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          greenBody: '#008080',
          grayMedium: '#7f7f7f',
          grayLight: '#c0c0c0',
          grayLighter: '#c6c6c6',
          grayDark: '#4e4e4e',
          grayDarker: '#404040',
          blueDark: '#000080',
          blueLight: '#0000EE'
        },
        fontFamily: {
          levi: ['Levi', 'sans-serif']
        },
        borderWidth: {
          '1': '1px'
        }
      },
    },
    plugins: [],
  }