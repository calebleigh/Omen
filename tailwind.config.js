/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'orange': '#ff8800',
      'green': '#13ce66',
      'blue': '#110E20',
      'gray': '#999999',
      'gray-light': '#cccccc',
    },

    'h-shrink': '90vh',
    'w-shrink': '90vw',

    extend: {
      
      'h-shrink': '90vh',
      'w-shrink': '90vw',

    },
  },
  plugins: [],
}
