import { ref, reactive } from 'vue';

export const useMessages = ()=>{
  const messages = reactive<Message[]>([
    // { role: 'assistant', content: '1'},
    // { role: 'assistant', content: '2'},
    // { role: 'user', content: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'},
    // { role: 'user', content: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'},
    // { role: 'user', content: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'},
    // { role: 'user', content: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'},
    // { role: 'user', content: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'},
    // { role: 'user', content: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'},
    // { role: 'user', content: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'},
    // { role: 'user', content: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'},
    // { role: 'user', content: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'},
    // { role: 'user', content: '2'},
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




