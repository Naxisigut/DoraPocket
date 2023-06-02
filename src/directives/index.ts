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


/* dialog标签 点击modal后关闭dialog */
const dialogModalClose = {
  name: 'modal-close',
  directive:{
    mounted: (el:HTMLDialogElement) => {
      console.log(1212, this);
      el.setAttribute('modal', 'true')
      el.addEventListener('click', (e)=>{
        if(!e.target)return
        const modalClicked = e.target.getAttribute('modal')
        if(modalClicked)el.close()
      })
    }
  }
}

/* dialog标签 监听Ctrl+K 控制dialog显隐 */
const dialogKeyOpen = {
  name: 'k-open',
  directive:{
    mounted: (el:HTMLDialogElement) => {
      console.log('key open');(el:HTMLDialogElement) => {
        el.setAttribute('modal', 'true')
        el.addEventListener('click', (e)=>{
          if(!e.target)return
          const modalClicked = e.target.getAttribute('modal')
          if(modalClicked)el.close()
        })
      }
      // 禁止ctrl+k默认行为
      window.addEventListener('keydown', (e)=>{
        if(e.code === 'KeyK' && e.ctrlKey){
          e.preventDefault()
        }
      })
  
      // ctrl + k 打开dialog
      window.addEventListener('keyup', (e)=>{
        if(e.ctrlKey && e.code === 'KeyK' && el.getAttribute('open') === null){
          el.showModal()
        }
      })
    }
  }
}

/* dialog标签 监听Ctrl+K 控制dialog显隐 */
const keySelect = {
  name: 'key-select',
  directive:(el:HTMLInputElement) => {
    console.log(111122);
    el.addEventListener('keyup', (e) => {
      console.log(e.repeat);
    })
  }
}

export default {
  install(app){
    app.directive(dialogModalClose.name, dialogModalClose.directive)
    app.directive(dialogKeyOpen.name, dialogKeyOpen.directive)
    app.directive(keySelect.name, keySelect.directive)
  }
}
