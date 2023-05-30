<template>
  <div>
    <div class="flex justify-center">
      <button class="flex items-center px-3 w-1/2 max-w-xs h-10 text-stone-400 rounded-full min-w-max ring-1 ring-slate-200 hover:ring-slate-300" @click="clickSearch">
        <SearchIcon></SearchIcon>
        <p class="flex-1 text-left">请输入...</p>
        <p class="hidden sm:block">Ctrl+K</p>
      </button>
    </div>
    <!-- backdrop:backdrop-blur-xxs -->
    <dialog v-modal-close class="p-0 rounded-lg " ref="searchPop" id="dialog">
      <div class="w-[80vw] max-w-lg h-[70vh]">
        <div class="flex items-center leading-8 text-slate-400 p-4 border-b-2 border-slate-300">
          <SearchIcon></SearchIcon>
          <input type="text" v-model="keyWord" class=" flex-1 outline-none" placeholder="请输入...">
        </div>
        <div v-if="!searchRes.length" class="p-4 leading-8 text-center">暂无搜索结果</div>
        <ul v-else>
          <li v-for="(item, index) in searchRes" @click="jump(item)" :key="index" class=" px-8 py-4 leading-8 border-b-2 border-slate-100 hover:bg-slate-100">
            {{item.name}}
          </li>
        </ul>
      </div>
    </dialog>

  </div>
</template>

<script setup lang="ts">
import SearchIcon from '@/svgs/search-icon.vue';
import {ref, computed} from 'vue';
import {useDataBaseStore} from '@/stores/database';
const store = useDataBaseStore()
import {useRouter} from 'vue-router';
const router = useRouter()

/* 模板引用：搜索弹窗 */
const searchPop = ref()

/* 点击搜索栏 */
const clickSearch = ()=>{
  searchPop.value.showModal()
}

/* 搜索功能 */
const keyWord = ref('')
const searchRes = computed(()=>{
  if(!keyWord.value)return []
  return store.search(keyWord.value)
})
const jump = (item: searchDataItem)=>{
  router.push(item.routeName)
  searchPop.value.close()
}

</script>

<style scoped>
dialog{
  animation: slideDown .5s ease;
}
dialog::backdrop{
  backdrop-filter: blur(1px);
  animation: slowIn .5s ease;
}
ul>li{
  animation: slowIn .5s ease;
}
@keyframes slideDown {
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slowIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>

<!-- <style scoped>
dialog{
  transition: all .5s ease-in-out;
}
dialog:not(open){
  /* 自定义隐藏默认样式 */
  display: block;
  visibility: hidden;
  inset: 0;

  /* 上方进入 */
  transform: translateY(-100vh);
}
dialog[open]{
  /* 自定义显示默认样式 */
  visibility: visible;

  /* 上方进入 */
  transform: translateY(0);
}
dialog[open]::backdrop{
  backdrop-filter: blur(1px);
}
</style> -->
