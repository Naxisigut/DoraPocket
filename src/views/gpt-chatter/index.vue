<script lang="ts">
export default {
  name: 'GptChatter',
};
</script>

<template>
  <div class=" h-[90vh] p-[20px] flex flex-col items-center">
    <div class=" flex flex-col w-full md:w-[80%] h-[100%] bg-neutral-100 shadow-lg border border-gray-200 rounded-xl">
      <h4 class=" px-5 py-2 border-b-2 text-lg">
        <span>Chat With Me</span>
      </h4>
      <div class="px-5 overflow-auto scroll-auto h-0 flex-1">
        <ChatRecord v-for="(item, index) in messages" :key="index" :record="item"></ChatRecord>
        <div class=" h-0 mt-3" ref="ballast"></div>
      </div>
      <div class=" border-t-2 p-2">
        <a-textarea autoSize v-model:value="userInput" :disabled="!allowInput" @keyup="handleInputKey" @keydown.up.prevent></a-textarea>
        <div class="btn-wrapper text-right mt-2">
          <i class="iconfont icon-clear mr-3 hover:font-bold " @click="clear"></i>
          <i class="iconfont icon-setting mr-3 hover:font-bold" @click="openSetting"></i>
          <c-button size="mini" type="primary" @click="send">send</c-button>
        </div>
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

<script setup lang="ts">
import {ref, computed, nextTick } from 'vue';
import Msg from '@/components/Message';
import ChatRecord from './components/chat-record.vue';
import { useMessages } from './useMessages';
import { useChatter } from './useChatter';

const { configForm, chatter, initChatter, getAnswer } = useChatter()
const { messages, userIptShift, clear, msgGo, msgBack } = useMessages()

/* 设置界面 */
const settingVisible = ref<boolean>(false)
const openSetting = () => {
  settingVisible.value = true
}
const handleOk = () => {
  initChatter()
  settingVisible.value = false
}

/* 输入并发送 */
const userInput = ref<string>('hello')
const allowInput = computed(()=>!!chatter.value)
const send = ()=>{
  if(!allowInput.value)return Msg.error('请设置api！')
  msgGo(userInput.value)
  userInput.value = ''
  const msg = msgBack('')
  nextTick(toRecordBottom)
  getAnswer(messages).then((res)=>{
    msg.content = res.choices[0].message.content
    nextTick(toRecordBottom)
  })
}
const handleInputKey = (e:KeyboardEvent) => {
  // console.log(e);
  switch (e.code) {
    case 'Enter':
      if(e.ctrlKey)send()
      break;
    case 'ArrowUp':
      const preIpt = userIptShift('pre')
      if(preIpt)userInput.value = preIpt
      break;
      case 'ArrowDown':
      const nextIpt = userIptShift('next')
      if(nextIpt)userInput.value = nextIpt
      break;
    default:
      break;
  }
}

/* 滚动至底部 */
const ballast = ref<HTMLDivElement>(null)
const toRecordBottom = ()=>{
  ballast.value.scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  })
}

</script>

<style scoped></style>