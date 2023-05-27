<template>
  <div class="flex justify-center">
    <button class="flex items-center px-3 w-1/2 max-w-xs h-10 text-stone-400 rounded-full min-w-max ring-1 ring-slate-200 hover:ring-slate-300">
      <SearchIcon></SearchIcon>
      <p class="flex-1 text-left">请输入...</p>
      <p class="hidden sm:block">Ctrl+K</p>
    </button>
  </div>

  
</template>

<script setup lang="ts">
import SearchIcon from '@/svgs/search-icon.vue';

</script>

<style scoped>
</style>
