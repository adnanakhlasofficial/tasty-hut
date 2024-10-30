/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#FFC107",
        'deep-black': "#100F0F",
        'gray-2': "#403F3F",
      },
      fontFamily:{
        'poppins': "Poppins"
      }
    },
  },
  plugins: [],
}