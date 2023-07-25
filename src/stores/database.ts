// import {ref, computed, reactive} from 'vue';
const allData: searchDataItem[] = [
  {name: '二维码', path: '/QR-dealer', routeName: 'QR-dealer',keywords: ['QRCode', 'qrcode', '二维码']},
  {name: 'Github', path: '/github-shortcuts', routeName: 'github-shortcuts', keywords: ['github', "GITHUB"]},
  {name: '颜色转换', path: '/color-trans', routeName: 'color-trans', keywords:['颜色', 'color', 'Color']},
  {name: '正则输入框', path: '/input-num-sanitize', routeName: 'input-num-sanitize', keywords:['正则输入框', 'regex', 'Regex']},
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
      // return this.allData.filter(i=>i.name.includes(val))
      return this.allData.filter((i) => {
        if(i.name.includes(val))return true
        if(i.routeName.includes(val))return true
        if(i.keywords){
          if(i.keywords.some((keyword) => keyword.includes(val)))return true
        }
        return false
      })
    }
  }
})