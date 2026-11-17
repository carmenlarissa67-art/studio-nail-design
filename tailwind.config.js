/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f6',
          100: '#f9f0ec',
          200: '#f4ded6',
          300: '#ecc4b6',
          400: '#dfa08d',
          500: '#cb7a63',
          600: '#b86149',
          700: '#994e3a',
          800: '#7f4233',
          900: '#69392e',
        },
        champagne: {
          DEFAULT: '#D4AF37',
          light: '#F5E6AB',
          dark: '#AA820A'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
