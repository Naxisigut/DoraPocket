<script lang="ts">
export default {
  name: "ColorTrans",
};
</script>


<template>
  <div class=" h-[80vh] p-[20px] flex justify-center items-center">
    <div class=" w-[400px] shadow-lg border border-gray-200 rounded-xl grid grid-cols-1 p-5 gap-5 ">
      <div>
        <!-- <input type="color"> -->
        <a-input addon-before="取色器" type="color" @change="pickColor"></a-input>
      </div>
      <div class=" flex items-center">
        <a-input class=" flex-1 mr-5" addon-before="十六进制" placeHolder="请输入十六进制或RGBA" v-model:value="value.hex" @keyup.enter="confirm(value.hex)"></a-input>
        <c-button type="primary" size="mini" @click="copyText(value.hex)">复制</c-button>
      </div>
      <div class=" flex items-center">
        <a-input class=" flex-1 mr-5" addon-before="RGBA" placeHolder="请输入十六进制或RGBA" v-model:value="value.rgba" @keyup.enter="confirm(value.rgba)"></a-input>
        <c-button type="primary" size="mini" @click="copyText(value.rgba)">复制</c-button>
      </div>
      <div class=" flex items-center">
        <affix-span prefix="HSLA" :content="value.hsla" class=" flex-1 mr-5"></affix-span>
        <c-button type="primary" size="mini" @click="copyText(value.hsla)">复制</c-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { CColor } from '@/class/CColor';
import { copyText } from '@/utils/other';
import { ChangeEvent } from 'ant-design-vue/lib/_util/EventInterface';
import Msg from '@/components/Message';

const value = reactive({
  hex: '',
  rgba: '',
  hsla: '',
})

const confirm = (val: string)=>{
  const newColor = new CColor(val)
  if(!newColor.isValid){
    Msg('输入值非法！')
    return Object.assign(value, { hex: '', rgba: '', hsla: '' })
  }
  
  value.hex = newColor.hex
  value.rgba = newColor.rgba
  value.hsla = newColor.hsla
}

const pickColor = (e:ChangeEvent) => {
  if(e.target.value){
    confirm(e.target.value)
  }
}
</script>





<style></style>