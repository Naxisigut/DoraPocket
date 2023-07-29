<script lang="ts">
export default{
  name: 'gpt-chatter'
}
</script>

<template>
  <div class=" h-[80vh] p-[20px] flex justify-center items-center">
    <div class=" w-[400px] shadow-lg border border-gray-200 rounded-xl p-5 ">
      <h4 class=" leading-10 text-center">Chat With Me</h4>
      <a-textarea autosize v-model:value="userInput" :disabled="allowInput"></a-textarea>
      <div class="btn-wrapper text-right mt-4">
        <i class="iconfont icon-shezhi mr-3 hover:font-bold" @click="openSetting"></i>
        <c-button size="mini" type="primary" @click="send">send</c-button>
      </div>
    </div>

    <a-modal v-model:open="settingVisible" title="设置" @ok="handleOk">
      <a-form :model="configForm" :labelCol="{span: 4}">
        <a-form-item label="代理地址">
          <a-input v-model:value="configForm.basePath" placeholder="代理地址"></a-input>
        </a-form-item>
        <a-form-item label="ApiKey">
          <a-input v-model:value="configForm.apiKey" type="password" placeholder="ApiKey"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import {ref, reactive, computed } from 'vue';
import { Configuration, OpenAIApi } from 'openai';
import Msg from '@/components/Message';


const configForm = ref({
  basePath: 'https://api.chatanywhere.com.cn',
  apiKey: ''
})
let openAIApi: OpenAIApi
const openSetting = () => {
  settingVisible.value = true
}
const settingVisible = ref<boolean>(false)
const handleOk = () => {
  openAIApi = new OpenAIApi(new Configuration(configForm.value))
  Msg.success('初始化完成')
  settingVisible.value = false
}

const userInput = ref<string>('hello')
const allowInput = computed(()=>!openAIApi)
type Message  = {
  role: 'assistant' | 'user',
  content: string
}
const messages = reactive<Message[]>([])
const send = ()=>{
  msgGo(userInput.value)
  getAnswer().then((res)=>{
    msgBack(res.content)
    console.log(res.content);
  })
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
const getAnswer = async ()=>{
   const answer = await openAIApi.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages
   })
   return answer.data.choices[0].message
}

</script>

