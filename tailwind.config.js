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
      backgroundImage: {
        heroBg:
          "linear-gradient(90deg, rgba(16,15,15,0.7147233893557423) 0%, rgba(16,15,15,0.711922268907563) 35%), url('../images/banner.webp')",
      },
    },
  },
  plugins: [require("daisyui")],
};
