<script lang="ts">
export default {
  name: "ColorTrans",
};
</script>


<template>
  <div class=" h-[80vh] p-[20px] flex justify-center items-center">
    <div class="  shadow-lg border border-gray-200 rounded-xl grid grid-cols-1 p-5 gap-5 ">
      <div class=" flex items-center">
        <a-input class=" flex-1 mr-5" addon-before="初始值" placeHolder="请输入十六进制或RGBA" v-model:value="initVal"></a-input>
      </div>
      <div></div>
      <div class=" flex items-center">
        <affix-span prefix="十六进制" class=" flex-1 mr-5">
          <h4 class=" font-bold text-lg">{{ value.hex }}</h4>
        </affix-span>
        <c-button type="primary" size="mini" @click="copyText(value.hex)">复制</c-button>
      </div>
      <div class=" flex items-center">
        <affix-span prefix="RGBA" class=" flex-1 mr-5">
          <h4 class=" font-bold text-lg">{{ value.rgba }}</h4>
        </affix-span>
        <c-button type="primary" size="mini" @click="copyText(value.rgba)">复制</c-button>
      </div>
      <div class=" flex items-center">
        <affix-span prefix="HSLA" class=" flex-1 mr-5">
          <h4 class=" font-bold text-lg">{{ value.hsla }}</h4>
        </affix-span>
        <c-button type="primary" size="mini" @click="copyText(value.hsla)">复制</c-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { CColor } from '@/utils/color';
import { copyText } from '@/utils/other';


// const value = reactive({
//   hex: '',
//   rgba: '',
//   hsla: ''
// })

const value = computed(() => {
  const newColor = new CColor(initVal.value)
  // return {
  //   hex: ''
  // }
  // if(!newColor.isValid){
  //   Object.assign(value, {hex: '', rgba: '', hsla: ''})
  // }
  return {
    hex: newColor.hex,
    rgba: newColor.rgba,
    hsla: newColor.hsla,
  }
 
})

const initVal = ref<string>('')

// const handleChange = (val: string)=>{
//   const newColor = new CColor(val)
//   if(!newColor.isValid){
//     Object.assign(value, {hex: '', rgba: '', hsla: ''})
//     return
//   }
//   value.hex = newColor.hex
//   value.rgba = newColor.rgba
//   value.hsla = newColor.hsla
// }

</script>





<style></style>