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
        bounce: 'bounce 1s infinite', 
      },

      keyframes: {
      bounce: {
        '0%, 100%' : { transform: 'translateY(100%)', opacity: '0%' },
        '25%' : {opacity : '75%'},
        '50%': { transform: 'translateY(0%)', opacity: '100%' },
        '75%': {opacity : '75%'},

        },
      },
    },
  },
  plugins: [],
}
