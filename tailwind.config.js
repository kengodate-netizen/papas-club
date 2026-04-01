/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8B5A2B',
          DEFAULT: '#5C4033', // Woody brown
          dark: '#3e2723',
        },
        secondary: {
          light: '#A3B18A', // Soft green
          DEFAULT: '#588157', // Botanical green
          dark: '#3A5A40',
        },
        accent: {
          light: '#F4A460',
          DEFAULT: '#D2691E', // Sepia/Earth tone
          dark: '#A0522D',
        },
        background: {
          DEFAULT: '#E6CDA3',
          paper: '#FDFBF7', // Off-white for cards
        }
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      }
    },
  },
  plugins: [],
}
