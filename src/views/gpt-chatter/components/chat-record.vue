<template>
  <div class="chat-record" :class="{ 'right': props.record.role === 'user' }">
    <span :class="{'bg-user': props.record.role === 'user'}" class=" max-w-[50%] inline-block whitespace-normal py-1 px-2 border border-gray-200 rounded-md">
      {{ props.record.content }}
    </span>
  </div>
</template>


<script lang="ts" setup>
import { PropType } from 'vue';
const props = defineProps({
  record: {
    type: Object as PropType<Message>,
    required: true
  }
})

</script>

<style scoped>
.right{
  text-align: right;
}
.bg-user{
  background: rgb(101 163 13);
}
.chat-record + .chat-record{
  margin-top: 10px;
}
</style>