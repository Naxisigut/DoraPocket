import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './components-web';

const app = createApp(App)

import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

import router from './router';
app.use(router)

import directives from './directives';
app.use(directives)

app.mount('#app')
