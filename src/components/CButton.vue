<template>
  <button :disabled="props.disabled" class="c-button">
    <slot name="default"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CColor } from '@/utils/color';

// Rgb2HSL({R:255, G: 87, B: 34})
// console.log(rgbaToHsl(255, 87, 34, 0));
console.log(new CColor('#3333337D'));
console.log(new CColor('rgba(51, 51, 51)'));

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

// const borderColor = computed(() => {
//   // if(props.type === 'primary')return '#155e75'
//   return '#646cff'
// })


</script>

<style scoped>
button{
  /* border: 1px solid transparent; */
  /* transition: border-color .25s; */

  background-color: v-bind(bgColor);
  /* background-color:  */
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  outline: 2px solid transparent;
  transition: outline-color .25s;
  line-height: normal;
  color: v-bind(textColor);
}

/* 鼠标悬浮 */
button:hover{
  /* border-color: v-bind(borderColor); */

  outline: 2px solid -webkit-focus-ring-color;
}

/* 鼠标点击后 */
button:focus:not(:focus-visible){
}

/* 键盘选中 */
button:focus-visible {
  outline: 2px solid -webkit-focus-ring-color;
}

/* 鼠标点击中：由于优先级，须放在最后 */
button:active:focus{
  
}

:global(.c-button + .c-button){
  margin-left: 10px;
}

</style>