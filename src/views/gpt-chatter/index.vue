<script lang="ts">
export default{
  name: 'gpt-chatter'
}
</script>

<template>
  <div class=" h-[90vh] p-[20px] flex flex-col items-center">
    <div class=" w-[400px] shadow-lg border border-gray-200 rounded-xl p-5 ">
      <h4 class=" leading-10 text-center">Chat With Me</h4>
      <a-textarea autosize v-model:value="userInput" :disabled="!allowInput"></a-textarea>
      <div class="btn-wrapper text-right mt-4">
        <i class="iconfont icon-setting mr-3 hover:font-bold" @click="openSetting"></i>
        <c-button size="mini" type="primary" @click="send" @key.enter="send">send</c-button>
      </div>
    </div>

    <div class=" flex flex-col w-[80%] h-0 flex-1 mt-5  bg-neutral-100 shadow-lg border border-gray-200 rounded-xl">
      <h4 class=" px-5 py-2 border-b-2 text-lg">
        <span>Records</span>
        <i class="iconfont icon-clear hover:font-bold float-right" @click="clear"></i>
      </h4>
      <div class="p-5 overflow-auto h-0 flex-1">
        <ChatRecord v-for="(item, index) in messages" :key="index" :record="item"></ChatRecord>
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
import ChatRecord from './components/chat-record.vue';
import { useMessages } from './useMessages';
import { useChatter } from './useChatter';

const { configForm, chatter, initChatter, getAnswer } = useChatter()
const { messages, clear, msgGo, msgBack } = useMessages()

const openSetting = () => {
  settingVisible.value = true
}
const settingVisible = ref<boolean>(false)
const handleOk = () => {
  initChatter()
  settingVisible.value = false
}

const userInput = ref<string>('hello')
const allowInput = computed(()=>!!chatter.value)

const send = ()=>{
  if(!allowInput.value)return Msg.error('请设置api！')
  msgGo(userInput.value)
  getAnswer(messages).then((res)=>{
    msgBack(res.content)
    // console.log(res.content);
  })
}

</script>

