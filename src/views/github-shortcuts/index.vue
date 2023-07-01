<template>
  <div class="  mx-auto max-w-[960px]">
    <div v-if="profile" class=" pb-10 my-5 text-center text-sm leading-6">
      <div class=" w-[150px] h-[150px] rounded-full overflow-hidden mx-auto border-stone-500 border">
        <a title="访问Github主页" :href="profile.html_url" target="_blank">
          <img :src="profile.avatar_url" alt="">
        </a>
      </div>
      <h3 class=" text-xl">
        <a class=" px-4 hover:bg-neutral-200" title="访问Github主页" :href="profile.html_url" target="_blank">{{ profile.name }}</a>
      </h3>
      <p class="">{{ profile.bio }}</p>
      <p class="">{{ profile.location }}</p>
    </div>

    <PanelFold v-if="repos.length" v-model="reposPanel.isFold" >
      <h2 class=" px-6 text-2xl">🐣Repository</h2>
      <ul class=" p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full mx-auto">
        <li v-for="(item, index) in repos" :key="index" class=" p-4 shadow-md w-full rounded-md bg-neutral-100 hover:scale-110 transition-transform">
          <a :href="item.html_url" target="_blank" class=" block w-full h-full  ">
            <h5 class="truncate font-medium text-lg">{{ item.name }}</h5>
            <p class=" font-light text-base">{{ item.description }}</p>
          </a>
        </li>
      </ul>
    </PanelFold>

    <PanelFold v-if="starred.length" v-model="starredPanel.isFold">
      <h2 class=" px-6 text-2xl">🌌Stars</h2>
      <ul class=" p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full mx-auto">
        <li v-for="(item, index) in starred" :key="index" class=" p-4 shadow-md w-full rounded-md bg-neutral-100 hover:scale-110 transition-transform">
          <a :href="item.html_url" target="_blank" class=" block w-full h-full  ">
            <h5 class="truncate font-medium text-lg">{{ item.name }}</h5>
            <p class=" font-light text-base">{{ item.description }}</p>
          </a>
        </li>
      </ul>
    </PanelFold>
  </div>


</template>

<script setup lang="ts">
import { reactive, Ref, ref } from 'vue';
import PanelFold from './components/PanelFold.vue';


/* 简单封装fetch */
function fetchGithub(url: string){
  return new Promise<any>((resolve, reject) => {
    fetch(url).then((response) => {
      // console.log(response);
      // if(response.status !== 200){
      //.json()返回一个Promise，其结果为json parse后的对象
      response.ok ? resolve(response.json()) : reject(new Error(response.status.toString()))
    })
    .catch((err) => {
      reject(err)
    })
    
  })
}

/* 获取用户数据&仓库数据 */
let profile: Ref<GitHubProfile | null> = ref(null)
fetchGithub('https://api.github.com/users/Naxisigut').then((res: GitHubProfile) => {
  profile.value = res
}).then(() => {
  getRepos()
  getStarred()
}).catch((err) => {
  console.log('err', err.message);
})

/* 获取仓库数据 */
const reposPanel = reactive({
  isFold: true,
  loading: false,
  ready: false
})
let repos: Ref<Array<Repository>> = ref([])
const getRepos = () => {
  if(!profile.value)return
  fetchGithub(profile.value.repos_url).then((res) => {
    repos.value = res
  })
}

/* 获取star的仓库数据 */
const starredPanel = reactive({
  isFold: true,
  loading: false,
  ready: false
})
let starred = ref<Array<Record<string, any>>>([])
const getStarred = () => {
  if(!profile.value)return
  fetchGithub(profile.value.starred_url.split('{')[0]).then((res) => {
    starred.value = res
  })
}



</script>

<style scoped>
</style>