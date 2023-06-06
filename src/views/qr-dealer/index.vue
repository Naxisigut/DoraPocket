<template>
  <div class="flex items-center justify-center min-h-[inherit]">
    <div class="">
      <div class=" text-center">
        <!-- <label for="" class="w-[80px]">功能选择：</label> -->
        <vaadin-combo-box class=" m-8" theme="align-right " .items="funcOpts" .value="currFunc" @change="change"></vaadin-combo-box>
      </div>
      <div class="flex">
        <div class="flex flex-col justify-center p-4 w-[300px]">
          <!-- 尺寸 -->
          <div class="flex">
            <label for="" class="w-[80px]">解析内容：</label>
            <textarea rows="3" v-model="params.text" class="flex-1 pl-2 w-0 outline-none border-slate-500 border-2 rounded-md  text-slate-600"></textarea>
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
        <div v-if="(currFunc == '生成二维码' && params.text) || currFunc == '解析二维码'  " class=" flex flex-col justify-center p-4 border-l-2 border-slate-500">
          <img v-if="currFunc == '生成二维码'" :src="generatedBaseSrc" alt="">
          <img v-if="currFunc == '解析二维码' && uploadImgSrc" :src="uploadImgSrc " alt="" class=" w-[200px] h-[200px]"> 
          <input ref="uploader" type="file" hidden @change="getUploadImg">
          <button class=" rounded-md bg-gray-100 p-2 mt-4" @click="upload">上传图片</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, computed } from "vue";
import { ComboBoxChangeEvent } from "@vaadin/combo-box";
import QR from 'qrcode-base64'
const params = reactive({
  text: '',
  typeNumber: 4,
  errorCorrectLevel: 'M',
  size: 256
})

const generatedBaseSrc = computed(()=>{
  return QR.drawImg(params.text, {
    typeNumber: params.typeNumber,
    errorCorrectLevel: params.errorCorrectLevel,
    size: params.size
  })
})

const funcOpts = reactive([ '生成二维码', '解析二维码' ])
const currFunc = ref('生成二维码') // 默认值
const change = (e: ComboBoxChangeEvent<string>)=> currFunc.value = e.target.value

const uploader = ref<HTMLInputElement | null>(null)
const uploadImgSrc = ref<string>('')
const upload = ()=>uploader.value?.click()
const getUploadImg = (e)=>{
  // console.log(e.target.files);
  if(!e.target.files.length)return
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => uploadImgSrc.value = reader.result as string
}


</script>

<style scoped>
</style>
