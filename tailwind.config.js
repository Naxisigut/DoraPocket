/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xxs: '1px',
        xs: '2px',
      }
    },
  },
  plugins: [],
}

/* responsive
  sm: >640px
  md: >768px
  lg: >1024px
  xl: >1280px
  2xl: >1536px

*/