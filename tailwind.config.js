/** @type {import('tailwindcss').Config} */
import someting from './src/assets/icon-previous.svg'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange':'hsl(26, 100%, 55%)',
        'pale-orange':' hsl(25, 100%, 94%)',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
        'pale-black': 'hsl(0, 0%, 0%)'

      },
      screens: {
        'mobile': '778px',
        'tablet': '960px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily:{
        kumbh:['Kumbh Sans','sans-serif']
      },
      content:{
        'before':'url("./src/assets/icon-previous.svg")',
        'after':'url("./src/assets/icon-next.svg")'


      }
    },
  },
  plugins: [],

}

