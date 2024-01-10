
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
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors:{
      'blue': 'var(--blue)',
      'white': 'var(--white)',
      'black':'var(--black)',
      'orange':'var(--orange)',
      'greenish':'var(--greenish)'
      }
  
    },
  },
  plugins: [],
}