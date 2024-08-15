/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
  ],
  darkMode: 'Class',
  variants: {
    extend: {
      textOpacity: ['dark'],
    },
  },
  theme: {
    extend: {}
  },
  plugins: []
}