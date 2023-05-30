/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: [
          "Montserrat",
          'sans-serif',
          'Arial',
          'sans-serif',
        ],
      },
      colors:{
        dark: '#151515',
        dark1:'#343a40',
        darkB:'#162E44',
        lightB:'#01b3a7',
        lgreen:'#50ba87',
        light: '#ffffff',
        grey: '#d7d7d7',
      },
    },
  },
  plugins: [],
}

