import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './components-web';

const app = createApp(App)

import { createPinia } from 'pinia'
import router from './router';
const pinia = createPinia()
import directives from './directives';
import globalComponnents from './components';
import antdComponents from './Imports/antdComponents';

app.use(pinia).use(router).use(directives).use(globalComponnents).use(antdComponents)


app.mount('#app')
