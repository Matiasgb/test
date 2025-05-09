/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontSize: {
          'xs-sm': '0.75rem',
          'xl-plus': '1.5rem',
          'hero-title': '3rem',
        },
        colors: {
          gold: '#E8C16B',
          navy: '#1B1B1B',
          pampgray: '#F5F5F5',
        },
      },
    },
    plugins: [],
  };
  