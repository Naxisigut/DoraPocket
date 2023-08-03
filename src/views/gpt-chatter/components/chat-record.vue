<template>
  <div class="chat-record flex mt-3" :class="{ 'justify-end': props.record.role === 'user' }">
    <i v-if="!isUser" style="font-size: xx-large;" class="iconfont icon-bot-solid mr-2 text-blue-200"></i>
    <div :class="[isUser ? 'bg-lime-500' : 'bg-white']" class=" max-w-[80%] self-center inline-block whitespace-normal py-1 px-2 border border-gray-200 rounded-md">
      <svgLoading v-if="!loaded"></svgLoading>
      <template v-else>
        <span v-if="isUser" style="color: #232323ff" class=" text-sm">{{ props.record.content }}</span>
        <!-- tailwind去除code默认的伪元素 -->
        <VueShowdown 
          v-else
          :markdown="props.record.content" 
          :options="{ emoji: true }"
          flavor="github" 
          class="prose prose-sm prose-p:my-2 prose-pre:my-2 prose-code:before:hidden prose-code:after:hidden" 
        ></VueShowdown>
      </template>
    </div>
    <i v-if="isUser" style="font-size: xx-large;" class="iconfont icon-user ml-2 text-blue-200"></i>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { VueShowdown } from 'vue-showdown';
import svgLoading from '@/svgs/svg-loading.vue';
const props = defineProps({
  record: {
    type: Object as PropType<Message>,
    required: true
  }
})

const isUser = computed(() => props.record.role === 'user')
const loaded = computed(() => !!props.record.content)



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
.chat-record{
}
</style>