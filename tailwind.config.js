/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBlue: '#4791FF',
        neutral: '#F9F4DA',
        offBlack: '#404040',
      },
      fontFamily: {
        inter: 'Inter,sans-serif',
      },
    },
  },
  plugins: [],
};
