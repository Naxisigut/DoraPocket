import { createMsgApp } from "./instance";

export const Msg = (config: MsgConfig | string) => {
  if(typeof config === 'string')config = {
    content: config,
    type: 'plain',
    duration: 2000
  }
  createMsgApp(config)
}