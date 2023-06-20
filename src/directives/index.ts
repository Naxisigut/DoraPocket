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
 * 2. 若需要给window绑定监听，注意在元素销毁前beforeUnmount移除监听
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
  directive:{
    mounted: (el:HTMLDialogElement) => {
      // console.log('mounted');
      // 禁止ctrl+k默认行为
      const keyDownHandler = (e: KeyboardEvent) => {
        if(e.code === 'KeyK' && e.ctrlKey) e.preventDefault()
      }
      el.keyDownHandler = keyDownHandler
      window.addEventListener('keydown', keyDownHandler)

      // ctrl + k 打开dialog
      const keyUpHandler = (e:KeyboardEvent) => {
        if(e.ctrlKey && e.code === 'KeyK' && el.getAttribute('open') === null)el.showModal()
      }
      el.keyUpHandler = keyUpHandler
      window.addEventListener('keyup', keyUpHandler)
    },
    beforeUnmount: (el: HTMLDialogElement) => {
      // 元素销毁时移除全局监听
      window.removeEventListener('keydown', el.keyDownHandler)
      window.removeEventListener('keyup', el.keyUpHandler)
    },
  }
}

/** 指令：监听上下键和enter键，对列表项进行选择
 * 用法：
 * 1.该指令应绑定在欲选择项列表的祖先元素上；
 * 2.页面中处于聚焦状态(参见activeElement)的元素为指令绑定元素的子孙元素时，
 *   上下键选择和enter键确认的功能才会生效
 * 3.欲选择项的类名须包含key-selectable
 * 4.选中项的样式通过.key-selectable[selected]选择器来定制
 * 5.enter键功能通过对欲选择项的click事件进行监听来完成
 */
const keySelect:DirectiveObj = {
  name: 'key-select',
  directive:{
    mounted: (el:HTMLInputElement) => {
      /* 页面聚焦元素为el的子孙元素时，监听才会被触发，功能生效 */
      el.addEventListener('keydown', (e) => {
        // console.log(e);
        let actType = ''
        if(e.code === 'ArrowUp' || e.code === 'ArrowDown') {
          actType = "select"
        }else if(e.code === 'Enter' || e.code === 'NumpadEnter'){
          actType = 'confirm'
        }
        if(!actType)return
        e.preventDefault() // 阻止默认行为

        /* 获取所有可选项 */
        const list = el.querySelectorAll('.key-selectable')
        if(!list.length)return
        
        /* 获取当前选中项的下标，若当前无选中项，selectedIdx为-1 */
        let selectedIdx = -1
        for(let i = 0; i<list.length; i++){
          if(list[i].hasAttribute('selected')){
            selectedIdx = i
            break
          }
        }

        if(actType === 'select'){
          /* 移除当前选中项上的selected属性 */
          if(selectedIdx !== -1)list[selectedIdx].removeAttribute('selected')
  
          /* 获取新选中项的下标 */
          let newSelectedIdx = e.code === 'ArrowUp' ? selectedIdx -1 : selectedIdx +1
          if(newSelectedIdx < 0)newSelectedIdx = list.length -1
          if(newSelectedIdx >= list.length)newSelectedIdx = 0
  
          /* 为新选中项设置selected属性，并移动视图至该项 */
          list[newSelectedIdx].setAttribute('selected', '')
          list[newSelectedIdx].scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
          })
          return
        }

        if(actType === 'confirm'){
          list[selectedIdx].click()
          return
        }
      })
    },
  }
}

export default {
  install(app){
    app.directive(keySelect.name, keySelect.directive)
  }
}
