/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "../front-end/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'orange': '#FEAC56',
      'green': '#37BD6B',
      'lightGreen': 'rgba(55, 189, 107, 0.28)',
      'gray': '#666666',
      'black': '#171215',
    },
    extend: {},
  },
  plugins: [],
}

