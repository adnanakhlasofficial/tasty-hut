/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC107",
        primaryHover: "#dea705",
        deepBlack: "#100F0F",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [require("daisyui")],
};
