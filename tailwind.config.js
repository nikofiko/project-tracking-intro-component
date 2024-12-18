/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        bar: ["Barlow"],
        barc: ["Barlow Condensed"]
      },
      boxShadow: {
        custom: '0px 3px 8px rgba(0, 0, 0, 0.24)',
      },
      colors: {
        'grayiest': 'hsl(207, 33%, 95%)',
        'ball': 'hsl(231, 7%, 65%)',
        'blue-gray': 'hsl(230, 11%, 40%)',
        'red-but': 'hsl(0, 100%, 68%)'
      }
    },
  },
  plugins: [],
}

