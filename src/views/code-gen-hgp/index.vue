<template>
  <div>
    <a-textarea v-model:value="template" placeholder="Basic usage" :rows="4" />
    <a-form :model="form">

    </a-form>
    <a-button>生成</a-button>
  </div>
</template>

<script lang="ts">
export default {
  name: "CodeGenHGP",
};
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const template = ref<string>('')
const form = reactive({
  
})

</script>

<style>
</style>