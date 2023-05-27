<template>
  <div class="flex justify-center">
    <button class="flex items-center px-3 w-1/2 max-w-xs h-10 text-stone-400 rounded-full min-w-max ring-1 ring-slate-200 hover:ring-slate-300" @click="clickSearch">
      <SearchIcon></SearchIcon>
      <p class="flex-1 text-left">请输入...</p>
      <p class="hidden sm:block">Ctrl+K</p>
    </button>
  </div>

  <dialog v-modal-close class="p-0 backdrop:backdrop-blur-xxs bg-transparent" ref="searchPop" id="dialog">
    <div class="w-[80vw] max-w-lg h-[70vh] rounded-lg bg-white">
      <div class="flex items-center leading-8 text-slate-400 p-4 border-b-2">
        <SearchIcon></SearchIcon>
        <input type="text" class=" flex-1 outline-none" placeholder="请输入...">
      </div>
      <div v-if="!searchRes.length" class="p-4 leading-8 text-center">暂无搜索结果</div>
      <ul v-else>
        <li v-for="(item, index) in searchRes" :key="index" class="p-4 leading-8">
          {{item}}
        </li>
      </ul>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import SearchIcon from '@/svgs/search-icon.vue';
import {ref, reactive} from 'vue';

const searchPop = ref()

const clickSearch = ()=>{
  searchPop.value.showModal()
}

const searchRes = reactive(['1'])

</script>

<style scoped>
</style>
