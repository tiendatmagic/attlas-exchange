/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'posts': '0px 8px 24px #ededed',
      }
    },
  },
  plugins: [],
}
