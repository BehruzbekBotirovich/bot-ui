/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'body': '#0C111D',
      'gray-body': '#F0F0F6',
      'white': '#ffffff',
      'dark': '#272733',
      'purple': '#AF00CA',
      'red': '#E05523',
      'orange': '#ff7849',
      'green': '#0B9C37',
      'yellow': ' #EABF39',
      'gray-light': '#F1F2F5',
      'gray-dark': ' #85889E ',
      'gray': '#9598AD',
      'blue': '#0077FF'
    },
  },
  plugins: [],
};

