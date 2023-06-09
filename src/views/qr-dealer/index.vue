<template>
  <div class="flex min-h-[inherit]">
    <div class=" m-auto p-4 shadow-gray-300 shadow-md border border-gray-200 rounded-lg transition-all">
      <div class=" text-center">
        <vaadin-combo-box class=" m-8" theme="align-right " .items="funcOpts" .value="currFunc" @change="change"></vaadin-combo-box>
      </div>

      <div class=" w-fit m-auto">
        <component :is="currCpnt"></component>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, computed } from "vue";
import { ComboBoxChangeEvent } from "@vaadin/combo-box";
import QrGenerate from './components/qr-generate.vue';
import QrParse from './components/qr-parse.vue';



/* 功能选择下拉 */
const funcOpts = reactive([ '生成二维码', '解析二维码' ])
const currFunc = ref<string>('生成二维码') // 默认值
const change = (e: ComboBoxChangeEvent<string>)=> currFunc.value = e.target.value
const currCpnt = computed(()=>{
  return currFunc.value == '生成二维码' ? QrGenerate : QrParse
})



</script>

<style scoped>
</style>
