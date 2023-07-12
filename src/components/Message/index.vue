<script lang="ts">
export default {
  name: 'CMessage'
}
</script>

<template>
  <div>
    <div>{{ props.content }}</div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  duration:{
    type: Number,
    default: 1000
  }
})





</script>
