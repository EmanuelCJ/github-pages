/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4B4B4B',
        secondary: '#800080',
        tertiary: '#000000',
        arena: '#D4A017',
      }

    },
  },
  plugins: [
    require('tailwindcss-motion')
  ],
}

