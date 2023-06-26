<template>
  <div class=" h-[calc(100%-108px)] flex flex-col items-center justify-center">
    <!-- 解析内容 -->
    <img v-if="uploadImgSrc" :src="uploadImgSrc " alt="" class=" w-[200px] h-[200px] mb-4"> 
    <textarea ref="contentTextArea" disabled rows="3" v-model="content" class="pl-2 outline-none border-slate-500 border-2 rounded-md text-slate-600 w-[300px]"></textarea>
    <input ref="uploader" type="file" hidden @change="getUploadImg">
    <div class=" mt-4">
      <c-button @click="upload">上传图片</c-button>
      <c-button :disabled="!content" type="primary" round @click="copyContent">复制内容</c-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import QRParser from 'qrcode-parser';
import { file2Url } from '@/utils/file';
import { copyText } from '@/utils/other';

/* 上传图片并解析 */
const uploader = ref<HTMLInputElement | null>(null)
const uploadImgSrc = ref<string>('')
const upload = ()=>uploader.value?.click()
const getUploadImg = (e)=>{
  // if(!e.target)return
  if(!e.target.files.length)return
  const file = e.target.files[0]
  file2Url(file).then((res) => {
    uploadImgSrc.value = res
    parse()
  })
}

/* 解析二维码 */
const content = ref<string>('')
const parse = () => {
  if(!uploader.value || !uploader.value.files || !uploader.value.files.length)return
  const file = uploader.value.files[0]
  QRParser(file).then((res) => {
    content.value = res
  }).catch((err) => {
    console.log(err);
  })
}

/* 复制解析内容 */
const contentTextArea = ref<HTMLTextAreaElement | null>()
const copyContent = () => {
  copyText(content.value)
}

</script>

<style scoped>
</style>
