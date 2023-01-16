/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
    './*.{html,js}',
    './src/**/*.{html,js}'
  ],

  theme: {
    extend: {
     keyframes: {
      skull: {
        '0%' : { transform: 'translateY(500%)', opacity: '0%' },
        '50%': { opacity: '100%' },
        '100%': { transform: 'translateY(0%)', opacity : '0%'},

        },
      
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
        slide: {
          '0%': { transform: 'translateX(0%)'},
          '50%': {transform: 'translateX(-12vh)'},
          '100%': {transform: 'translateX(0%)'},
        },
        slide2: {
          '0%': { transform: 'translateX(0%)'},
          '50%': {transform: 'translateX(12vh)'},
          '100%': {transform: 'translateX(0%)'},
        },
        slide3: {
          '0%': { transform: 'translateX(0%)'},
          '50%': {transform: 'translateX(-30vh)'},
          '100%': {transform: 'translateX(0%)'},
        },
        slide4: {
          '0%': { transform: 'translateX(0%)'},
          '50%': {transform: 'translateX(30vh)'},
          '100%': {transform: 'translateX(0%)'},
        },
      },

      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'fading': 'fade 4s forwards',
        'sliding': 'slide 4s linear infinite',
        'skull': 'skull 2s',
        'sliding2': 'slide2 4s linear infinite',
        'sliding3': 'slide3 4s linear infinite',
        'sliding4': 'slide4 4s linear infinite',
      },

    },
  },
  plugins: [],
}