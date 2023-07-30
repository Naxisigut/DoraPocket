<template>
  <div class="chat-record flex items-center" :class="{ 'justify-end': props.record.role === 'user' }">
    <i v-if="!isUser" style="font-size: xx-large;" class="iconfont icon-bot-solid mr-2 text-blue-200"></i>
    <span :class="[ isUser ? 'bg-user' : 'bg-assistant' ]" class=" max-w-[80%] flex-1 inline-block whitespace-normal py-1 px-2 border border-gray-200 rounded-md">
      {{ props.record.content }}
    </span>
    <i v-if="isUser" style="font-size: xx-large;" class="iconfont icon-user ml-2 text-blue-200"></i>
  </div>
</template>


<script lang="ts" setup>
import { PropType, computed } from 'vue';
const props = defineProps({
  record: {
    type: Object as PropType<Message>,
    required: true
  }
})

const isUser = computed(() => props.record.role === 'user')



</script>

<style scoped>
.right{
  text-align: right;
}
.bg-user{
  background: rgb(101 163 13);
}
.bg-assistant{
  background: rgb(255 255 255);
}
.chat-record + .chat-record{
  margin-top: 10px;
}
</style>