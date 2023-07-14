<template>
  <div class="container p-2 mx-auto" >
    <PopSearch :source="allData" @trigger="jump" ></PopSearch>
    <button @click="msg('success')">success</button>
    <button @click="msg('error')">error</button>
    <button @click="msg('warning')">warning</button>
    <button @click="msg('plain')">plain</button>
    <button @click="msg('info')">info</button>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import PopSearch from './components/PopSearch.vue';
import {renderMsg} from './components/Message';

const msg = (type) => {
  renderMsg({
    content: '111',
    type
  })
}
// import axios from 'axios';


// console.log({axios});

import { storeToRefs } from 'pinia';
import { useDataBaseStore } from '@/stores/database';
const { allData } = storeToRefs(useDataBaseStore())


import {useRouter} from 'vue-router';
const router = useRouter()
const jump = (item: searchDataItem)=>{
  router.push(item.routeName)
}


</script>

<style scoped>
</style>

<style>
body{
  background: #fafafa;
}
</style>
