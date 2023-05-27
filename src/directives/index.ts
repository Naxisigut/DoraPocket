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

export default {
  install(app){
    app.directive(dialogModalClose.name, dialogModalClose.directive)
  }
}
