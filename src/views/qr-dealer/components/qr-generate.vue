<template>
  <div class=" h-[calc(100%-108px)] flex items-center justify-center flex-wrap sm:flex-nowrap">
    <!-- 左：表单 -->
    <div class="p-4 sm:flex-1 min-w-[300px] max-w-[400px]">
      <!-- 内容 -->
      <div class="flex">
        <label for="" class="w-[80px]">内容：</label>
        <textarea ref="content" rows="3" v-model="params.text" class="flex-1 w-0 pl-2 outline-none border-slate-500 border-2 rounded-md  text-slate-600"></textarea>
      </div>
      <!-- 码元版本 -->
      <div class="flex items-center h-10">
        <label for="" class="w-[80px]">码元版本：</label>
        <select v-model="params.typeNumber" class="flex-1 w-0 outline-none border-slate-500 border-2 rounded-md text-slate-600" >
          <option value="">--请选择--</option>
          <option v-for="(item, index) in 40" :key="index" :value="item">{{ item }}</option>
        </select>
      </div>
      <!-- 纠错级别 -->
      <div class="flex items-center h-10">
        <label for="" class="w-[80px]">纠错级别：</label>
        <select v-model="params.errorCorrectLevel" class="flex-1 w-0 outline-none border-slate-500 border-2 rounded-md text-slate-600">
          <option value="">--请选择--</option>
          <option value="H">极高</option>
          <option value="Q">高</option>
          <option value="M">中</option>
          <option value="L">低</option>
        </select>
      </div>
      <!-- 尺寸 -->
      <div class="flex items-center h-10">
        <label for="" class="w-[80px]">尺寸：</label>
        <input type="text" v-model="params.size" class="flex-1 pl-2 w-0 outline-none border-slate-500 border-2 rounded-md text-slate-600">
      </div>
      <!-- 按钮 -->
      <!-- <div class=" flex items-center justify-end mt-4">
        <c-button type="primary" @click="copyContent">复制内容</c-button>
      </div> -->
    </div>

    <!-- 右：图片 -->
    <div v-if="params.text" class=" flex flex-col justify-center p-4 sm:border-l-2 border-slate-500">
      <img :src="generatedBaseSrc" class="w-[200px]" alt="">
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import QR from 'qrcode-base64'

/* 二维码表单 */
const params = reactive({
  text: '',
  typeNumber: 4,
  errorCorrectLevel: 'M',
  size: 256
})

/* 生成二维码 */
const generatedBaseSrc = computed(()=>{
  return QR.drawImg(params.text, {
    typeNumber: params.typeNumber,
    errorCorrectLevel: params.errorCorrectLevel,
    size: params.size
  })
})


</script>

<style scoped>
</style>
