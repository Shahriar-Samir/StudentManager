/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primeColor': '#F33823'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes:['light']
  }
}