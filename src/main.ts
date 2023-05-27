import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

import directives from './directives';
app.use(directives)

app.mount('#app')
