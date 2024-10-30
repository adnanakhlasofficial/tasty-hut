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
        'secondary': "#DEA705",
        'deep-black': "#100F0F",
        'gray-2': "#403F3F",
      },
      fontFamily:{
        'poppins': "Poppins"
      },
      backgroundImage:{
        'banner': "linear-gradient(0deg, rgba(16,15,15,0.7) 0%, rgba(16,15,15,0.7) 100%), url('/images/banner.webp')"
      }
    },
  },
  plugins: [],
}