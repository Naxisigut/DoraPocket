/* v1.1 */
import { createMsgApp } from "./instance";

type MsgConfig = {
  content: string,
  duration?: number,
  type?: 'plain' | 'success' | 'error' | 'info' | 'warning'
}

const Msg = (config: MsgConfig | string) => {
  if(typeof config === 'string')config = {
    content: config,
    type: 'plain',
    duration: 2000
  }
  createMsgApp(config)
}

const error = (content: string, duration?: number) => {
  return Msg({
    content, duration, type: 'error'
  })
}
const success = (content: string, duration?: number) => {
  return Msg({
    content, duration, type: 'success'
  })
}
const info = (content: string, duration?: number) => {
  return Msg({
    content, duration, type: 'info'
  })
}
const warning = (content: string, duration?: number) => {
  return Msg({
    content, duration, type: 'warning'
  })
}
Msg.error = error
Msg.success = success
Msg.info = info
Msg.warning = warning

export default Msg