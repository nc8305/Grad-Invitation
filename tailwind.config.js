/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'montserrat': ['"Montserrat"', 'sans-serif'],  
        'pacifico': ['"Pacifico"', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
        'fabulous': ['"MyFabulousFont"', 'cursive'],
        'amarilo': ['"Amarillo"', 'cursive'],
        'betterletters': ['"Better Letters"', 'cursive'],
        'fzbonestay' : ['"FZBonestay"', 'cursive'],
        'fzmile' : ['"FZ Mile"', 'cursive'],
      },
      colors: {
        'rose': {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        }
      }
    },
  },
  plugins: [],
}
