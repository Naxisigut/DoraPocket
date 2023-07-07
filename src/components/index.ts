import { App } from 'vue';
import CButton from './CButton.vue';


export default {
  install: (app: App<Element>)=>{
    app.component('c-button', CButton)
  }
}
