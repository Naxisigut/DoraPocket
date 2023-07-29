import { createApp } from 'vue'
import './style.css';
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import './components-web';
import App from './App.vue'

const app = createApp(App)

import { createPinia } from 'pinia';
import router from './router';
const pinia = createPinia();
import directives from './directives';
import globalComponnents from './components';
// import antdComponents from './Imports/antdComponents';

app.use(pinia).use(router).use(directives).use(globalComponnents).use(Antd)


app.mount('#app')
