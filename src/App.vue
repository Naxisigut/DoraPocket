<template>
  <div class="container p-2 mx-auto" >
    <GlobalSearch></GlobalSearch>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import GlobalSearch from './components/GlobalSearch.vue';


</script>

<style scoped>
</style>
