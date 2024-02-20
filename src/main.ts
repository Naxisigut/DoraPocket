import './style.css';
import './components-web';
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

// router
import router from './router';

// directives
import directives from './directives';

// Ant-design组件库 
import Antd from 'ant-design-vue';

// 全局组件
import globalComponnents from './components';

// highlight组件
import "./imports/highlightjs"
import hljsVuePlugin from "@highlightjs/vue-plugin";

app.use(pinia).use(router).use(directives).use(globalComponnents).use(Antd).use(hljsVuePlugin)
app.mount('#app')
