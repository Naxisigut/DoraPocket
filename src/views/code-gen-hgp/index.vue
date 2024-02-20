<template>
  <div class="flex h-screen">
    <div class="w-3/12 border h-full mr-10">
      <a-form :model="form">
  
        <a-button>生成</a-button>
      </a-form>
    </div>
    <div class="flex-1 h-full overflow-auto">
      <highlightjs language="js" :code="tempRef"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CodeGenHGP",
};
</script>

<script setup lang="ts">
import {
  vars,
  template
} from './template.js';
import { reactive, ref } from 'vue'
const tmpl = template

const tempRef = ref<string>(tmpl)
tempRef.value = `// 加工退料单` +  tempRef.value
const form = reactive({

})

</script>

<style>
</style>