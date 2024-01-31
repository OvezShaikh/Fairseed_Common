 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1366px',
        'max-desktop': {'max': '1365px'},
        'max-tablet': {'max': '751px'},
      },
    },
  },
  plugins: [],
}

