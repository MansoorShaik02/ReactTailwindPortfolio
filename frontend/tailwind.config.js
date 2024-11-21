/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif', 'Funnel Sans'],
      },
      colors: {
        customGray: 'rgba(113, 113, 122, 0.8)',
        nonPhotobLUE: 'rgb(65.1%, 49.02% ,72.16%,1)'
      },
    },
  },


  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui', '@tailwindcss/typography'),

  ],
}