/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        'main': "#98FF98",
        'dark-main': "#3CB371",
        'gray-bf': "#BFBFBF",
        'gray-36': "#363636",
        'gray-70': "#707070",
        'gray-97': "#979797"
      },
    },
  },
  mode: "jit",
  plugins: [],
}

