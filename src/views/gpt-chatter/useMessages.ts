import { ref, reactive } from 'vue';

export const useMessages = ()=>{
  const messages = reactive<Message[]>([
    // { role: 'assistant', content: '除了Vue，尤雨溪还参与了一些其他项目，包括：\n\n1. Vue Router：Vue的官方路由管理器。\n2. Vuex：Vue的官方状态管理库。\n3. Vue CLI：Vue的官方脚手架工具。\n4. VuePress：Vue的官方静态网站生成器。\n5. Vite：一个由尤雨溪开发的快速、简单的前端构建工具。\n6. Vue Test Utils：Vue的官方单元测试工具库。\n7. Vue Devtools：Vue的官方开发者工具，用于在浏览器中调试Vue应用程序。\n\n这些项目都是为了提供更好的开发体验和工具支持，使开发者更容易构建和维护Vue应用程序。'},
    // { role: 'assistant', content: '### Hello, Vue Showdown! :tada:输入你的 Markdown 代码，立即得到相应的 HTML！开启下面的 `emoji` 选项，启用 emoji 解析！ :smile:开启下面的 `vueTemplate` Prop，启用 Vue 模板解析！'},
    // { role: 'assistant', content: '开启下面的 `emoji` 选项，启用 emoji 解析！ :smile:'},
  ])

  const clear = ()=>{
    messages.length = 0
  }

  const msgGo = (val)=>{
    messages.push({
      role: 'user',
      content: val
    })
  }
  const msgBack = (val: string)=>{
    messages.push({
      role: 'assistant',
      content: val
    })
  }

  return { messages, clear, msgGo, msgBack }
}




