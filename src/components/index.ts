import { App } from 'vue';
import CButton from './CButton.vue';
import AffixSpan from './AffixSpan.vue';


export default {
  install: (app: App<Element>)=>{
    app.component('c-button', CButton)
    app.component('affix-span', AffixSpan)
  }
}
