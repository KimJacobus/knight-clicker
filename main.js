import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {

        fontFamily: {
          primary: "trickster" 
        }, 

        fontFamily: {
          primary: "karrik" 
        }, 


      },
    },
    plugins: [],
  }



 