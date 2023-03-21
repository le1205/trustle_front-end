/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        light: ['PlusJakartaSans-Light'],
        medium: ['PlusJakartaSans-Medium'],
        extraBold: ['PlusJakartaSans-ExtraBold'],
        bold: ['PlusJakartaSans-Bold'],
        mediumItalic: ['PlusJakartaSans-MediumItalic']
      },
      colors: {
        primary: 'var(--color)'
      }
    },
  },
  plugins: [],
}
