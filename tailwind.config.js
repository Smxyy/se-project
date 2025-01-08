const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'OpenSans': ['Open Sans', 'sans-serif'],
      },
      colors:{
        'primary': '#6CE7AA',
        'secondary': '#FE8747',
        'tertiary': '#003366',
        'black': '#333333',
      },
      fontSize: {
        'h1': '36px',
        'h2': '28px',
        'h3': '24px',
        'h4': '20px',
        'body': '18px',
        'small': '16px',
      },
      fontWeight: {
        'h1': 'bold',
        'h2': '600', // 'semibold' is equivalent to 600
        'h3': '600', // 'semibold' is equivalent to 600
        'h4': '500', // 'medium' is equivalent to 500
        'body': '400', // 'regular' is equivalent to 400
        'small': '400', // 'regular' is equivalent to 400
      },
      lineHeight: {
        'h1': '2.5rem',
        'h2': '2rem',
        'h3': '1.75rem',
        'h4': '1.5rem',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

