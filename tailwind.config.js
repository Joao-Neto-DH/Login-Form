/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ['Montserrat', "sans-serif"]
      },
      keyframes: {
        shakeX: {
          "0%, 100%": {
            transform: "translate3d(-50%, -50%, 0)"
          },
          "50%": {
            transform: "translate3d(-56%, -50%, 0)"
          }
        },
      },
      animation: {
        shakeX: "shakeX 120ms linear 0s 3 normal both",
      }
    },
  },
  plugins: [],
}