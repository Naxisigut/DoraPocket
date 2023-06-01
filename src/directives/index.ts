/* dialog标签 点击modal后关闭dialog */
const dialogModalClose = {
  name: 'modal-close',
  directive:(el:HTMLDialogElement) => {
    el.setAttribute('modal', 'true')
    el.addEventListener('click', (e)=>{
      if(!e.target)return
      const modalClicked = e.target.getAttribute('modal')
      if(modalClicked)el.close()
    })
  }
}

/* dialog标签 监听Ctrl+K 控制dialog显隐 */
const dialogKeyOpen = {
  name: 'k-open',
  directive:(el:HTMLDialogElement) => {
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

export default {
  install(app){
    app.directive(dialogModalClose.name, dialogModalClose.directive)
    app.directive(dialogKeyOpen.name, dialogKeyOpen.directive)
  }
}
