/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',],
  theme: {
    screens: {
      mobile: { min: '320px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px' },
    },
    extend: {
      colors: {
        'main': "#87cdcf",
        'light-main': "#98FF98",
        'dark-main': "#5aa4a7",
        'gray-1e': '#1e2023',
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

