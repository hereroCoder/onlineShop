/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
  theme: {
    extend: {
      fontFamily:{
        'playfair': ['Playfair Display', 'sans-serif'],
        'barlow':  ['Barlow', 'sans-serif']
      },

      backgroundImage: {
        'backImg': "url('../public/background.jpg')",
      },
  
    },
  },
  plugins: [],
}