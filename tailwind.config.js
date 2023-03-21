/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        light: ['SpaceGrotesk-Light'],
        medium: ['SpaceGrotesk-Medium']
      },
    },
  },
  plugins: [],
}
