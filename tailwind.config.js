/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Dancing Script"', "cursive"],
      },
      backgroundImage: (theme) => ({
        "golden-gradient":
          "linear-gradient(to right, #fef9e7, #f8e8a2, #fdf1c2)",
      }),
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    themes: ["fantasy"],
  },
};
