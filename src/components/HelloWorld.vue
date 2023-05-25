<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
<div class="p-3 flex w-full bg-white">
      <div class="flex-1">
        <h4 class="text-lg mb-2 text-gray-800">
          商品管理
        </h4>
        <p class="text-xs text-gray-800">总计：30个分类。</p>
      </div>
      <div class="flex-1 text-right pt-3">
        <button class="bg-indigo-500 hover:bg-indigo-700 text-xs text-white py-2 px-4 rounded shadow ml-1" @click="addGoods()">
          添加商品
        </button>
      </div>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
