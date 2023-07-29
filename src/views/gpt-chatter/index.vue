<template>
  <div class=" h-[80vh] p-[20px] flex justify-center items-center">
    <div class=" w-[400px] shadow-lg border border-gray-200 rounded-xl p-5 ">
      111
      <c-button @click="openSetting">设置</c-button>
    </div>

    <a-modal v-model:visible="settingVisible" title="设置" @ok="handleOk">
      setting
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const openSetting = () => {
  settingVisible.value = true
}
const settingVisible = ref<boolean>(false)
const handleOk = () => {
  console.log('ok');
}

</script>

