/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        brand: {
          DEFAULT: '#6E59FF', // violet accent
          50: '#F4F2FF',
          100: '#EAE7FF',
          200: '#D1CCFF',
          300: '#B8B0FF',
          400: '#9F95FF',
          500: '#6E59FF',
          600: '#5B45E6',
          700: '#4A38BF',
          800: '#382A99',
          900: '#241B66'
        }
      }
    },
  },
  plugins: [],
}
