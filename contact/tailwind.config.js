/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00243A',
        'brand-cyan': '#00B8F1',
        'brand-yellow': '#FFD600',
        'brand-pink': '#FF2A58',
        'brand-gray': '#555555',
        'brand-cream': '#FAF9F6'
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'roboto-serif': ['Roboto Serif', 'serif']
      }
    },
  },
  plugins: [],
};
