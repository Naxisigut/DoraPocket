// import {ref, computed, reactive} from 'vue';
const allData: searchDataItem[] = [
  {name: '二维码', path: '/QR-dealer', routeName: 'QR-dealer'},
  {name: 'Github', path: '/github-shortcuts', routeName: 'github-shortcuts'},
  {name: '颜色转换', path: '/color-trans', routeName: 'color-trans'},
  {name: '二维码', path: '/QR-dealer', routeName: 'QR-dealer'},
  {name: '二维码', path: '/QR-dealer', routeName: 'QR-dealer'},
  {name: '二维码', path: '/QR-dealer', routeName: 'QR-dealer'},
  {name: '二维码', path: '/QR-dealer', routeName: 'QR-dealer'},
  {name: '二维码', path: '/QR-dealer', routeName: 'QR-dealer'},
  {name: '二维码', path: '/QR-dealer', routeName: 'QR-dealer'},
  {name: '二维码', path: '/QR-dealer', routeName: 'QR-dealer'},
]

/* 选项式store */
import {defineStore} from 'pinia';
export const useDataBaseStore = defineStore('database', {
  state() {
    return {
      allData,
    }
  },
  actions:{
    search(val:string){
      return this.allData.filter(i=>i.name.includes(val))
    }
  }
})