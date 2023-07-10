<script lang="ts">
export default {
  name: "ColorTrans",
};
</script>


<template>
  <div class=" h-[80vh] p-[20px] flex justify-center items-center">
    <div class="  shadow-lg border border-gray-200 rounded-xl grid grid-cols-1 p-5 gap-5 ">
      <div class=" flex items-center">
        <a-input class=" flex-1 mr-5" addon-before="十六进制" v-model:value="value.hex" @change="handleChange(value.hex)"></a-input>
        <c-button type="primary" size="mini">复制</c-button>
      </div>
      <div class=" flex items-center">
        <a-input class=" flex-1 mr-5" addon-before="RGBA" v-model:value="value.rgba" @change="handleChange(value.hex)"></a-input>
        <c-button type="primary" size="mini">复制</c-button>
      </div>
      <div class=" flex items-center">
        <a-input class=" flex-1 mr-5" addon-before="HSLA" v-model:value="value.hsla" @change="handleChange(value.hex)"></a-input>
        <c-button type="primary" size="mini">复制</c-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { CColor } from '@/utils/color';
import { copyText } from '@/utils/other';


const value = reactive({
  hex: '',
  rgba: '',
  hsla: ''
})

const handleChange = (val)=>{
  const newColor = new CColor(val)
  if(!newColor.isValid){
    return Object.assign(value, {hex: '', rgba: '', hsla: ' '})
  }
  value.hex = newColor.hex
  value.rgba = newColor.rgba
  value.hsla = newColor.hsla
}

</script>





<style></style>