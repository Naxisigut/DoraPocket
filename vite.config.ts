import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template:{
      compilerOptions:{
        isCustomElement: (tag) => {
          return tag.startsWith('vaadin')
        }
      }
    }
  })],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
