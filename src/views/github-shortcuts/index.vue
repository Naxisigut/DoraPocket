<template>
<!-- 
  <div>
    {{ profile.login }}
  </div> -->
  <!-- \grid-cols-[repeat(auto-fill, 300px)]  -->
  <!-- sm:w-[144px] md:w-[176px] lg:w-[240px] xl:w-[304px] -->
  <!-- sm:grid-cols-[repeat(auto-fill,144px)] md:grid-cols-[repeat(auto-fill,176px)]  -->
  <ul class="grid grid-cols-4 gap-4 justify-items-center w-full mx-auto">
    <li v-for="(item, index) in repos" :key="index" class="  p-4 shadow-md w-full">
      <a :href="item.html_url" class=" block w-full h-full ">
        <h5>{{ item.name }}</h5>
        <p>{{ item.description }}</p>
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
  return fetchGithub(profile.value.repos_url)
}).then((res) => {
  repos.value = res
}).catch((err) => {
  console.log('err', err.message);
})



// Object.assign(profile, res)
// Object.assign(repos, res)

</script>

<style scoped>
ul li{
  transition: all 1s ease-in;
}
ul{
  /* justify-self: center; */
  /* justify-items: center; */
  /* transition: all 2s ease; */

}
/* ul{
  grid-template-columns: repeat(auto-fill, 300px);
} */

</style>