<template>
  <button :disabled="props.disabled" class="c-button">
    <slot name="default"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: String,
  disabled: Boolean,
})

const textColor = computed(() => {
  if(props.type === 'primary')return '#fff'
  return 'inherit'
})

const bgColor = computed(() => {
  if(props.type === 'primary')return '#0e7490'
  return '#f2f2f2'
})

const borderColor = computed(() => {
  // if(props.type === 'primary')return '#155e75'
  return '#646cff'
})


</script>

<style scoped>
button{
  background-color: v-bind(bgColor);
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color .25s;
  line-height: normal;
  color: v-bind(textColor);
}

/* 鼠标悬浮 */
button:hover{
  border-color: v-bind(borderColor);
}

/* 鼠标点击后 */
button:focus:not(:focus-visible){
  outline: 4px auto -webkit-focus-ring-color;
}

/* 键盘选中 */
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

/* 鼠标点击中 */
button:active:focus{
  
}

:global(.c-button + .c-button){
  margin-left: 10px;
}

</style>