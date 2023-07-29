declare type Message  = {
  role: 'assistant' | 'user',
  content: string
}

declare type ConfigForm = {
  basePath: string,
  apiKey: string
}