/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: '#F4F4F4',
        secondary: '#ABEF5F',
        
      },
      fontFamily: {
        manrope: ['Manrope', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

