import {ref} from 'vue';
import { Configuration, OpenAIApi} from 'openai';
import Msg from '@/components/Message';
import { chatCompletion } from '@/apis/openai';

const configForm = ref<ConfigForm>({
  basePath: 'https://api.chatanywhere.com.cn',
  apiKey: ''
})

export const useChatter = ()=>{

  let chatter = ref<OpenAIApi>(null)

  // 初始化
  const initChatter = ()=>{
    if(!configForm.value.apiKey || !configForm.value.basePath)return Msg.error('初始化失败')
    chatter.value = new OpenAIApi(new Configuration(configForm.value))
    Msg.success('初始化成功')
  }

  // 发送提问请求
  const getAnswer = (messages: Message[])=>{
    return chatCompletion(messages)
 }

 return {
  chatter,
  configForm,
  initChatter,
  getAnswer,
  getConfig,
 }

}

// 获取当前openAi配置
export const getConfig = ()=> configForm.value