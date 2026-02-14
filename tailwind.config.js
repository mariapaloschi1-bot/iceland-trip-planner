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
        'ice-blue': '#00D9FF',
        'ice-light': '#64E9FF',
        'ice-dark': '#0099CC',
        'ice-purple': '#9D4EDD',
        'ice-purple-light': '#C77DFF',
        'ice-purple-dark': '#7B2CBF',
      },
    },
  },
  plugins: [],
}
