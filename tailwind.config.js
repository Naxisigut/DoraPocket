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
      },
      /* 自定义tailwind排版的样式 */ 
      typography(theme){
        return {
          DEFAULT:{
            css: {
              // inline-code标签样式
              ':not(pre)>code': {
                background: theme('colors.stone.200'),
                borderRadius: theme('borderRadius.DEFAULT'),
                padding: `${theme('spacing.1')} ${theme('spacing[1.5]')} `
              }
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

/* responsive
  sm: >640px
  md: >768px
  lg: >1024px
  xl: >1280px
  2xl: >1536px

*/