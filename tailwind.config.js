/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        'main': "#39FF14",
        'gray-36': "#363636",
        'gray-70': "#707070",
        'gray-97': "#979797"
      },
    },
  },
  plugins: [],
}

