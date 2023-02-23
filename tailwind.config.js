/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './fragments/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#3c298e',
        'rose-light': '#ead7e5'
      },
      maxWidth: {
        'layout-1440': '1440px',
        's-s': '180px',
        's-xs': '190px'
      },
      minHeight: {
        'img-card': '100px'
      }
    }
  },
  plugins: []
};
