<template>
  <ul class="grid grid-cols-4">
    <li v-for="(item, index) in repos" :key="index" class=" w-full p-4">
      <a :href="item.html_url" class=" block w-full h-full">
        <h5>{{ item.name }}</h5>
        <p>{{ item.description }}</p>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {reactive} from 'vue';

let profile, repos

function fetchGithub(url: string){
  return new Promise<any>((resolve, reject) => {
    fetch(url).then((response) => {
      if(response.status !== 200){
        reject(new Error(response.status.toString()))
      }
      return response.json()
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
    
  })
}

fetchGithub('https://api.github.com/users/Naxisigut').then((res) => {
  profile = reactive(res)
  return fetchGithub(profile.repos_url)
}).then((res) => {
  repos = reactive(res)
}).catch((err) => {
  console.log('err', err.message);
})




</script>

<style></style>