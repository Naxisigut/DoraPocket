import { App } from "vue";

import "ant-design-vue/lib/select/style"; // 加载 CSS
import Select from "ant-design-vue/lib/select"; // 加载 JS


export default {
  install: (app: App<Element>) => {
    app.use(Select)
  }
}