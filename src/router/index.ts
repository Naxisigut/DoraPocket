import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    // redirect: '/search',
  },
  {
    path: '/search',
    name: 'search-page',
    component: ()=>import('@/views/search-page/index.vue'),
  },
  {
    path: '/QR-dealer',
    name: 'QR-dealer',
    component: ()=>import('@/views/qr-dealer/index.vue'),
  },
]

// ()=>import('@/views/search-page/index.vue')

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router