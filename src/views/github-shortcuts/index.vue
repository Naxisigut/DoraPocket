<template>
  <div>
    git
  </div>
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
      console.log(3);
      reject(err)
    })
    
  })
}

fetchGithub('https://api.github.com/users/Naxisigut').then((res) => {
  profile = reactive(res)
  return fetchGithub(profile.repos_url)
}).then((res) => {
  repos = reactive(res)
  console.log(repos);
}).catch((err) => {
  console.log(2, err.message);
})

// fetch('https://api.github.com/users/Naxisigut').then((response) => {
//   if(response.status !== 200){
//     throw new Error(response.status.toString())
//   }
//   return response.json()
// }).then((res) => {
//   profile = reactive(res)
// }).catch((err) => {
//   console.log(4, {err}); // err.message
// })



</script>

<style></style>