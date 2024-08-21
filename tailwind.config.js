/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: '#F4F4F4',
        secondary: '#ABEF5F',
        subTitle: '#494949',
        description: '#737373',
        quinary: '#00B4D8',
        senary: '#34495E',
        septenary: '#E74C3C',
        
      },
      fontFamily: {
        manrope: ['Manrope', 'Arial', 'sans-serif'],
      },
      container:{center:true}
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

