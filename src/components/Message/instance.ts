import { createApp } from 'vue';
import Message from './index.vue';

// 组件高度
const height = 54
const spaceHeight = 75

// 重设位置
const resetPosition = () => {
  const msgList = document.getElementsByClassName('c-message')
  for(let index = 0; index < msgList.length ;index++){
    msgList[index].style.top = `${index * height + spaceHeight}px`
  }
}

// 获取当前位置
const getCurrPosition = () => {
  const msgList = document.getElementsByClassName('c-message')
  return msgList.length * height + spaceHeight
}

// 创建msg应用实例
export const createInstance = (cfg) => {
  const config = cfg || {}
  // 创建容器，设置外层class，用于计数
  const msgNode = document.createElement('div')
  msgNode.setAttribute('class', 'c-message')

  // 设置高度，放置在已有的消息列表最下方
  msgNode.style.top = `${getCurrPosition()}px`

  msgNode.style.position = 'fixed'
  msgNode.style.width = '100vw'
  msgNode.style.transition = 'top .2s ease-out'

  // 创建实例并挂载到body
  const msgApp = createApp(Message, {
    ...config,
    destroy: ()=> destroyMsg()
  })
  msgApp.mount(msgNode)
  document.body.appendChild(msgNode)

  // 销毁组件方法
  const destroyMsg = () => {
    msgApp.unmount()
    document.body.removeChild(msgNode)
    resetPosition()
  }
  return msgApp 
}
