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
      typography:{
        DEFAULT:{
          css: {
            // pre标签中的code标签背景为透明
            // pre: {
            //   code:{
            //     background: 'transparent'
            //   }
            // },
            // 其它code标签样式
            ':not(pre)>code': {
              background: 'rgb(229 229 229);',
              borderRadius: '5px',
              padding: '2px 4px',
              margin: '2px',
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