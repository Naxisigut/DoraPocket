// const myDirective = {
//   // 在绑定元素的 attribute 前
//   // 或事件监听器应用前调用
//   created(el, binding, vnode, prevVnode) {
//     // 下面会介绍各个参数的细节
//   },
//   // 在元素被插入到 DOM 前调用
//   beforeMount(el, binding, vnode, prevVnode) {},
//   // 在绑定元素的父组件
//   // 及他自己的所有子节点都挂载完成后调用
//   mounted(el, binding, vnode, prevVnode) {},
//   // 绑定元素的父组件更新前调用
//   beforeUpdate(el, binding, vnode, prevVnode) {},
//   // 在绑定元素的父组件
//   // 及他自己的所有子节点都更新后调用
//   updated(el, binding, vnode, prevVnode) {},
//   // 绑定元素的父组件卸载前调用
//   beforeUnmount(el, binding, vnode, prevVnode) {},
//   // 绑定元素的父组件卸载后调用
//   unmounted(el, binding, vnode, prevVnode) {}
// }

/** directive
 * 1. 若需要在指令的元素上绑定监听，不要使用简写形式，避免在元素updated时多次执行绑定
 * 2. 若需要给window绑定监听，注意在元素销毁unmounted时移除监听
 */

import {Directive} from 'vue';
type DirectiveObj = {
  name: string,
  directive: Directive,
  [propName: string]: any
}

/* dialog标签 点击modal后关闭dialog */
const dialogModalClose:DirectiveObj = {
  name: 'modal-close',
  directive:{
    mounted: (el:HTMLDialogElement) => {
      el.setAttribute('modal', '')
      el.addEventListener('click', (e)=>{
        if(!e.target)return
        const modalClicked = e.target.hasAttribute('modal')
        if(modalClicked)el.close()
      })
    },
  }
}

/* dialog标签 监听Ctrl+K 控制dialog显隐 */
const dialogKeyOpen: DirectiveObj = {
  name: 'k-open',
  preventDefault: (e: KeyboardEvent) => {
    if(e.code === 'KeyK' && e.ctrlKey){
      e.preventDefault()
    }
  },
  ctrlKOpen: null,
  directive:{
    mounted: (el:HTMLDialogElement) => {
      // 禁止ctrl+k默认行为
      window.addEventListener('keydown', dialogKeyOpen.preventDefault)

      dialogKeyOpen.ctrlKOpen = (e:KeyboardEvent) => {
        if(e.ctrlKey && e.code === 'KeyK' && el.getAttribute('open') === null){
          el.showModal()
        }
      }

      // ctrl + k 打开dialog
      window.addEventListener('keyup', dialogKeyOpen.ctrlKOpen)
    },
    unmounted: () => {
      // 元素销毁时移除全局监听
      window.removeEventListener('keydown', dialogKeyOpen.preventDefault)
      window.removeEventListener('keyup', dialogKeyOpen.ctrlKOpen)
    },
  }
}

/* dialog标签  */
const keySelect:DirectiveObj = {
  name: 'key-select',
  directive:{
    mounted: (el:HTMLInputElement) => {
      
      el.addEventListener('keydown', (e) => {
        if(e.code !== 'ArrowUp' && e.code !== 'ArrowDown')return
        e.preventDefault()

        if(e.code === "ArrowUp" || "ArrowDown"){
          
        }
        const list = el.querySelectorAll('li')
        if(!list.length)return
        
        let selectedIdx = -1
        for(let i = 0; i<list.length; i++){
          if(list[i].hasAttribute('selected')){
            selectedIdx = i
            break
          }
        }

        if(selectedIdx !== -1)list[selectedIdx].removeAttribute('selected')
        let newSelectedIdx = -1
        if(e.code === 'ArrowUp'){
          newSelectedIdx = selectedIdx -1          
        }else if(e.code === 'ArrowDown'){
          newSelectedIdx = selectedIdx +1
        }
        if(newSelectedIdx < 0)newSelectedIdx = list.length -1
        if(newSelectedIdx >= list.length)newSelectedIdx = 0

        list[newSelectedIdx].setAttribute('selected', '')
        list[newSelectedIdx].scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
      })
    },
  }
}

export default {
  install(app){
    app.directive(dialogModalClose.name, dialogModalClose.directive)
    app.directive(dialogKeyOpen.name, dialogKeyOpen.directive)
    app.directive(keySelect.name, keySelect.directive)
  }
}
