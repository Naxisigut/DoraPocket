declare type MsgConfig = {
  content: string,
  duration?: number,
  type?: 'plain' | 'success' | 'error' | 'info' | 'warning'
}