import { createApp } from 'vue';
import Message from './index.vue';

const createInstance = (cfg) => {
  const config = cfg || {}
  // 创建容器，设置外层class，消息计数
  const messageNode = document.createElement('div')
  messageNode.setAttribute('class', 'c-message')

  const height = 54
  const msgList = document.getElementsByClassName('c-message')
  messageNode.style.top = `${msgList.length * height}px`

  // 创建实例并挂载到body
  const msgApp = createApp(Message)
  msgApp.mount(messageNode)
  document.appendChild(messageNode)

  // 取消挂载并重设位置
  const handleRemove = (params) => {
    msgApp.unmount()
    document.removeChild(messageNode)
    resetPosition()
  }

  const resetPosition = () => {
    const count = msgList.length
    // for(const msg of msgList){
    //   msg.style.top = 
    // }
  }

  return msgApp
  
}