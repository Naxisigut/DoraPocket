import { ref, reactive } from 'vue';

export const useMessages = ()=>{
  const messages = reactive<Message[]>([
    // { role: 'assistant', content: '除了Vue，尤雨溪还参与了一些其他项目，包括：\n\n1. Vue Router：Vue的官方路由管理器。\n2. Vuex：Vue的官方状态管理库。\n3. Vue CLI：Vue的官方脚手架工具。\n4. VuePress：Vue的官方静态网站生成器。\n5. Vite：一个由尤雨溪开发的快速、简单的前端构建工具。\n6. Vue Test Utils：Vue的官方单元测试工具库。\n7. Vue Devtools：Vue的官方开发者工具，用于在浏览器中调试Vue应用程序。\n\n这些项目都是为了提供更好的开发体验和工具支持，使开发者更容易构建和维护Vue应用程序。'},
    // { role: 'user', content: '### Hello, Vue Showdown! :tada:输入你的 Markdown 代码，立即得到相应的 HTML！开启下面的 `emoji` 选项，启用 emoji 解析！ :smile:开启下面的 `vueTemplate` Prop，启用 Vue 模板解析！'},
    // { role: 'user', content: "当然，请问您需要什么类型的正则表达式？正则表达式可以用于匹配、查找、替换字符串中的模式。以下是一些常见的正则表达式示例：\n\n1. 匹配邮箱地址：\n   ```\n   ^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\n   ```\n\n2. 匹配 URL：\n   ```\n   ^(https?|ftp)://[^\\s/$.?#].[^\\s]*$\n   ```\n\n3. 匹配手机号码（简化版）：\n   ```\n   ^1[3456789]\\d{9}$\n   ```\n\n4. 匹配日期（YYYY-MM-DD 格式）：\n   ```\n   ^\\d{4}-\\d{2}-\\d{2}$\n   ```\n\n5. 匹配整数：\n   ```\n   ^-?\\d+$\n   ```\n\n这些只是一些常见的示例，正则表达式可以根据具体需求进行定制。如果您有特定的需求，请提供更多详细信息，我可以帮助您创建更适合的正则表达式。"},
    // { role: 'user', content: '开启下面的 `emoji` 选项，启用 emoji 解析！ :smile:'},
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




