import { getConfig } from '@/views/gpt-chatter/useChatter';

// 简单封装fetch
function fetchOpenAi(api: string, params: Object){
  const { apiKey, basePath } = getConfig()
  const init: RequestInit = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }

  return new Promise<any>((resolve, reject) => {
    fetch(basePath + api, init).then((response) => {
      // 无论状态码是否是200，均执行then。不同之处在于200时reponse.ok为true，否则为false
      //.json()返回一个Promise，其结果为json parse后的对象
      response.ok ? resolve(response.json()) : reject(new Error(response.status.toString()))
    }).catch(()=>{
      // 断网或超时才会进入catch
      reject(new Error('network error'))
    })
  })
}



export const chatCompletion = (params)=>{
  return fetchOpenAi('/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: params
  }) as Promise<CreateChatCompletionResponse>
} 