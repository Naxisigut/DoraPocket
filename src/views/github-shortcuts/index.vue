<template>
  <div class=" my-5 text-center text-sm leading-6">
    <div class=" w-[150px] h-[150px] rounded-full overflow-hidden mx-auto border-stone-500 border">
      <img :src="profile.avatar_url" alt="">
    </div>
    <h3 class=" text-lg">
      <a class=" px-4 hover:bg-neutral-100" title="访问Github主页" :href="profile.html_url" target="_blank">{{ profile.name }}</a>
    </h3>
    <p class="">{{ profile.bio }}</p>
    <p class="">{{ profile.location }}</p>
  </div>


  <ul class=" p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full mx-auto">
    <li v-for="(item, index) in repos" :key="index" class=" p-4 shadow-md w-full rounded-md bg-neutral-100 hover:scale-110 transition-transform">
      <a :href="item.html_url" target="_blank" class=" block w-full h-full  ">
        <h5 class="truncate font-medium text-lg">{{ item.name }}</h5>
        <p class=" font-light text-base">{{ item.description }}</p>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

let profile: Ref<Record<string, any>> = ref({})
let repos: Ref<Array<Repository>> = ref([])

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
  profile.value = res
  console.log("profile =", profile.value)
  return fetchGithub(profile.value.repos_url)
}).then((res) => {
  // console.log("repos =", repos)
  repos.value = res
}).catch((err) => {
  console.log('err', err.message);
})



// Object.assign(profile, res)
// Object.assign(repos, res)

</script>

<style scoped>
</style>