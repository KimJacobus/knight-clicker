/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],

  theme: {
    extend: {

      animation: { 
        'skull': 'skull 1s infinite', 

        'waving-hand': 'wave 2s linear infinite',
        'fading': 'fade 4s forwards',
      },

      keyframes: {
      skull: {
        '0%, 100%' : { transform: 'translateY(100%)', opacity: '0%' },
        '25%' : {opacity : '75%'},
        '50%': { transform: 'translateY(0%)', opacity: '100%' },
        '75%': {opacity : '75%'},

        },
      },
      keyframes: {
        fade: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
     
    },
  },
  plugins: [],
}
