<template>
  <div class=" h-[80vh] p-[20px] flex justify-center items-center">
    <div class=" w-[400px] shadow-lg border border-gray-200 rounded-xl grid grid-cols-1 p-5 gap-5 ">
      <a-input v-model:value="value_1" v-ipt @input="onInput" @change="onChange"></a-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const value_1 = ref('')

/* 只允许输入0~9的字符 */
const correct_1 = (val:string) => {
  return val.replace(/\D+/g, '')
}
/* 非负整数 */
const correct_2 = (val:string) => {
  let res = val.replace(/\D+/g, '')
  return res === '' ? '' : Number(res).toString() // 消去多余的0；可输入空字符串
}
/* 非负数（可为小数） */
const correct_3 = (val:string) => {
  // 1 消除所有非数字、非小数点
  // 2 3 4 只保留第一个小数点
  // 5 匹配字符串最前面连续的0以及后面的一个数字，替换为后面的这个数字；不匹配
  let res = val.replace(/\D^\.+/g, '').replace('.','$#$').replace(/\./g,'').replace('$#$','.').replace(/^0+/, '0')
  if(res !== '0' && res.startsWith('0') && !res.startsWith('0.'))res = res.slice(1) // 
  return res
}


const onChange = (e) => {
  // 时序 1
  value_1.value = correct_3(e.target.value)
}
const onInput = (e) => {
  // 时序 2
  // const currVal = e.data
  // console.log('input', value_1.value);
}

/* 时序太晚，故不在这里做拦截 */
const vIpt = {
  mounted(el, binding) {
    el.addEventListener('input', (e)=>{
      // 时序 3
      // const currVal = e.data
      // console.log('direct input', value_1.value);
    })
    el.addEventListener('change', (e)=>{
      // 时序 4 在失焦后才执行
      // const currVal = e.data
      // console.log('direct change', value_1.value);
    })
  },
}

</script>

