/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        grass: "var(--grass)",
        fire: "var(--fire)",
        water: "var(--water)",
        normal: "var(--normal)",
        electric: "var(--electric)",
        ice: "var(--ice)",
        fighting: "var(--fighting)",
        poison: "var(--poison)",
        ground: "var(--ground)",
        flying: "var(--flying)",
        psychic: "var(--psychic)",
        bug: "var(--bug)",
        rock: "var(--rock)",
        ghost: "var(--ghost)",
        dragon: "var(--dragon)",
        dark: "var(--dark)",
        steel: "var(--steel)",
        fairy: "var(--fairy)"
      }
    },
  },
  plugins: [],
}