/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-rgba': 'rgba(255, 255, 255, 0.20)',
        'black-rgba-hover': 'rgba(255, 255, 255, 0.3)',
        'black-rgba-2': 'rgba(255, 255, 255, 0.6)',
        'readme-bg':'rgba(13, 17, 23,1)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}