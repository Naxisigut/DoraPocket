import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template:{
      compilerOptions:{
        /* vaadin web-components */
        isCustomElement: (tag) => {
          return tag.startsWith('vaadin')
        }
      }
    }
  })],

  /* githubPage部署 公共路径 */
  base: '/DoraPocket/',

  /* 暴露主机地址，可以通过Network访问当前项目 */
  server: {
    host: '0.0.0.0'
  },

  resolve:{
    /* 路径别名@ */
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
