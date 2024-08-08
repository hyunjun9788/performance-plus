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
      },
    },
  },
  plugins: [],
}

