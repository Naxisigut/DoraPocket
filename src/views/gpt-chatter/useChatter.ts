import {ref} from 'vue';
import { Configuration, OpenAIApi } from 'openai';
import Msg from '@/components/Message';


export const useChatter = ()=>{
  const configForm = ref<ConfigForm>({
    basePath: 'https://api.chatanywhere.com.cn',
    apiKey: ''
  })

  let chatter = ref<OpenAIApi>(null)

  // 初始化
  const initChatter = ()=>{
    if(!configForm.value.apiKey || !configForm.value.basePath)return Msg.error('初始化失败')
    chatter.value = new OpenAIApi(new Configuration(configForm.value))
    Msg.success('初始化成功')
  }

  // 发送提问请求
  const getAnswer = async (messages: Message[])=>{
    const answer = await chatter.value.createChatCompletion({
     model: 'gpt-3.5-turbo',
     messages
    })
    return answer.data.choices[0].message
 }

 return {
  chatter,
  configForm,
  initChatter,
  getAnswer
 }

}