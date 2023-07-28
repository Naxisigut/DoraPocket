<template>
  <div class=" h-[80vh] p-[20px] flex justify-center items-center">
    <div class=" w-[400px] shadow-lg border border-gray-200 rounded-xl grid grid-cols-2 p-5 gap-5 ">
      <div>
        <div class=" text-sm leading-6 font-bold">限定：纯数字</div>
        <a-input v-model:value="value_1" @change="onChange_1"></a-input>
      </div>
      <div>
        <div class=" text-sm leading-6 font-bold">限定：非负整数</div>
        <a-input v-model:value="value_2" @change="onChange_2"></a-input>
      </div>
      <div>
        <div class=" text-sm leading-6 font-bold">限定：非负数(包含小数)</div>
        <a-input v-model:value="value_3" @change="onChange_3"></a-input>
      </div>
      <div>
        <div class=" text-sm leading-6 font-bold">限定：整数(包含负数)</div>
        <a-input v-model:value="value_4" @change="onChange_4"></a-input>
      </div>
      <div>
        <div class=" text-sm leading-6 font-bold">限定：数字(包含负数、小数)</div>
        <a-input v-model:value="value_5" @change="onChange_5"></a-input>
      </div>
      <div>
        <div class=" text-sm leading-6 font-bold">限定：数字(包含负数、小数), 限定2位</div>
        <a-input v-model:value="value_6" @change="onChange_6"></a-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import { 
  numSanitize
} from '@/utils/number';


/* 限定：纯数字 */
const value_1 = ref('')
const onChange_1 = (e: InputEvent)=>{
  const target = e.target as HTMLInputElement
  // value_1.value = sanitize2Number(target.value)
  value_1.value = numSanitize(target.value, { isMinusAllowed: false, isDotAllowed: false })
}

/* 限定：非负整数 */
const value_2 = ref('')
const onChange_2 = (e: InputEvent)=>{
  const target = e.target as HTMLInputElement
  value_2.value = numSanitize(target.value, { isMinusAllowed: false, isDotAllowed: false} )
}
// replace(/(\.\d{3})\d+$/, '$1')
/* 限定：非负数(包含小数) */
const value_3 = ref('')
const onChange_3 = (e: InputEvent)=>{
  const target = e.target as HTMLInputElement
  value_3.value = numSanitize(target.value, { isMinusAllowed: false, isDotAllowed: true})
}

/* 限定：整数(包含负数) */
const value_4 = ref('')
const onChange_4 = (e: InputEvent)=>{
  const target = e.target as HTMLInputElement
  value_4.value = numSanitize(target.value, { isMinusAllowed: true, isDotAllowed: false})
}

/* 限定：数字(包含负数和小数) */
const value_5 = ref('')
const onChange_5 = (e: InputEvent)=>{
  const target = e.target as HTMLInputElement
  value_5.value = numSanitize(target.value, { isMinusAllowed: true, isDotAllowed: true})
}

/* 限定：数字(包含负数和小数), 限定2位数 */
const value_6 = ref('')
const onChange_6 = (e: InputEvent)=>{
  const target = e.target as HTMLInputElement
  value_6.value = numSanitize(target.value, { isMinusAllowed: true, isDotAllowed: true, digits: 2 })
}



// const onChange = (e: InputEvent) => {
//   console.log('change');
//   if(e.target && e.target.value){
//   }
//   // value_1.value = correct_5(e.target.value)
//   // @change 时序 1
// }
// const onInput = (e) => {
//   // @input 时序 2
//   // const currVal = e.data
//   // console.log('input', value_1.value);
// }
// /* 时序太晚，故不在自定义指令内做拦截 */
// const vIpt = {
//   mounted(el, binding) {
//     el.addEventListener('input', (e)=>{
//       // 自定义指令内监听input时间 时序3
//       // const currVal = e.data
//       // console.log('direct input', value_1.value);
//     })
//     el.addEventListener('change', (e)=>{
//       // 自定义指令内监听change事件 时序4 在失焦后才执行
//       // const currVal = e.data
//       // console.log('direct change', value_1.value);
//     })
//   }
// }

</script>

