<template>
  <div class="flex justify-center">
    <button class="flex items-center px-3 w-1/2 max-w-xs h-10 text-stone-400 rounded-full min-w-max ring-1 ring-slate-200 hover:ring-slate-300" @click="clickSearch">
      <SearchIcon></SearchIcon>
      <p class="flex-1 text-left">请输入...</p>
      <p class="hidden sm:block">Ctrl+K</p>
    </button>
  </div>

  <dialog v-modal-close class="p-0" ref="searchPop" id="dialog" @click="clickPop">
    <div>
      <input type="text">
      <div v-if="!searchRes.length">暂无搜索结果</div>
      <ul v-else>
        <li v-for="(item, index) in searchRes" :key="index">{{item}}</li>
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

/* 点击modal时关闭弹窗 */
// const clickPop = (e:PointerEvent)=>{
//   if(!e.target)return
//   const modalClicked = e.target.getAttribute('modal') === '' ? true : false
//   modalClicked && searchPop.value.close()
// }

const searchRes = reactive([])

</script>

<style scoped>
</style>
