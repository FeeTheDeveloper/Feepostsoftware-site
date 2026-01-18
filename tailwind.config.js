/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0B0B',
          primary: '#196C24',
          primaryAlt: '#58912F',
          accent: '#F8BF07',
          charcoal: '#323419',
          neutral: '#A8A9A9',
          white: '#FEFEFE',
        },
      },
    },
  },
  plugins: [],
}
