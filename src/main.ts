import { createApp } from 'vue'
import './style.css';
import Antd from 'ant-design-vue';
import './components-web';
import App from './App.vue'

const app = createApp(App)

import { createPinia } from 'pinia';
import router from './router';
const pinia = createPinia();
import directives from './directives';
import globalComponnents from './components';

app.use(pinia).use(router).use(directives).use(globalComponnents).use(Antd)


app.mount('#app')
