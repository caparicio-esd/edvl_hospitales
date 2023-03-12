/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css,sass,scss}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Fira Sans'", "sans-serif"]
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
