/// <reference types="vite/client" />


// 解决router/index.ts 中 @/views/xxx/index.vue 报错找不到类型定义
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>
  export default component
}
