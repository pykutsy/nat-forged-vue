/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:     '#F5EFE6',
        parchment: '#EDE3D2',
        forest:    '#3A4A3E',
        bronze:    '#B08E5C',
        charcoal:  '#2B2B2A',
        ivory:     '#FBF8F2',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
