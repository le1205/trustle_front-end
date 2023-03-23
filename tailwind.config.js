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
        mediumItalic: ['PlusJakartaSans-MediumItalic'],
        regular: ['PlusJakartaSans-Regular']
      },
      colors: {
        primary: 'var(--color)',
        secondary: 'var(--secondColor)'
      }
    },
  },
  plugins: [],
}
