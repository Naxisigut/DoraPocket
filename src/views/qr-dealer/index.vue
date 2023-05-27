<template>
  <div class="flex items-center justify-center min-h-[inherit]">
    <div class="flex">
      <div class="flex flex-col justify-center p-4 border-r-2 border-slate-500 w-[300px]">
        <!-- 尺寸 -->
        <div class="flex items-center h-10">
          <label for="" class="w-[80px]">解析内容：</label>
          <input type="text" v-model="params.text" class="flex-1 pl-2 w-0 outline-none border-slate-500 border-2 rounded-md  text-slate-600">
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
      </div>
      <div class="p-4 ">
        <img :src="baseSrc" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import QR from 'qrcode-base64'
const params = reactive({
  text: 'test',
  typeNumber: 4,
  errorCorrectLevel: 'M',
  size: 256
})

const baseSrc = computed(()=>{
  return QR.drawImg(params.text, {
    typeNumber: params.typeNumber,
    errorCorrectLevel: params.errorCorrectLevel,
    size: params.size
  })
})


</script>

<style scoped>
</style>
