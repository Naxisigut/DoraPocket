<template>
  <div class="container p-2 mx-auto" >
    <GlobalSearch></GlobalSearch>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlobalSearch from './components/GlobalSearch.vue';


</script>

<style scoped>
.view{
  /* min-height: calc(100vh - 56px); */
}
</style>

<style>
body{
  background: #fafafa;
}
</style>
