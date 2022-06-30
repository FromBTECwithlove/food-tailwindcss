/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {

      },
      backgroundImage: {
        'banner': "url('./public/img/banner.png')",
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
