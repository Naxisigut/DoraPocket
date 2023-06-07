<template>
  <div class="flex items-center justify-center min-h-[inherit]">
    <div class="">
      <div class=" text-center">
        <vaadin-combo-box class=" m-8" theme="align-right " .items="funcOpts" .value="currFunc" @change="change"></vaadin-combo-box>
      </div>
      <div class="flex">
        <!-- 左：表单 -->
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

        <!-- 右：图片 -->
        <div v-if="(currFunc == '生成二维码' && params.text) || currFunc == '解析二维码'" class=" flex flex-col justify-center p-4 border-l-2 border-slate-500">
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
import QRParser from 'qrcode-parser';
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
const currFunc = ref<string>('生成二维码') // 默认值
const change = (e: ComboBoxChangeEvent<string>)=> currFunc.value = e.target.value

const uploader = ref<HTMLInputElement | null>(null)
const uploadImgSrc = ref<string>('')
const upload = ()=>uploader.value?.click()
const getUploadImg = (e: {target: {files: Array<File>}})=>{
  // console.log(e.target.files);
  if(!e.target.files.length)return
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    uploadImgSrc.value = reader.result as string
    parse()
  }
}
const parsedContent = ref<string>('')
const parse = () => {
  if(!uploader.value || !uploader.value.files || !uploader.value.files.length)return
  const file = uploader.value.files[0]
  QRParser(file).then((res) => {
    parsedContent.value = res
    params.text = res
  }).catch((err) => {
    console.log(err);
  })
}


</script>

<style scoped>
</style>
