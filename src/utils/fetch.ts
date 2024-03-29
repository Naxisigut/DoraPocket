/* v1.1 */

import { getConfig } from '@/views/gpt-chatter/useChatter';
import { join2Query } from '@/utils/string';

// 简单封装fetch:openai
export function fetchOpenAi(api: string, params: object){
  const { apiKey, basePath } = getConfig()
  const init: RequestInit = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(params)
  }

  return easyFetch.post(basePath + api, params, init)
  // return new Promise<any>((resolve, reject) => {
  //   fetch(basePath + api, init).then((response) => {
  //     // 无论状态码是否是200，均执行then。不同之处在于200时reponse.ok为true，否则为false
  //     //.json()返回一个Promise，其结果为json parse后的对象
  //     response.ok ? resolve(response.json()) : reject(new Error(response.status.toString()))
  //   }).catch(()=>{
  //     // 断网或超时才会进入catch
  //     reject(new Error('network error'))
  //   })
  // })
}

/* 简单fetch：get */
const fetch_get = (url: string, params: Record<string, any> = {}) => {
  return fetch(url + join2Query(params), {
    method: 'GET',
  }).then((response) => {
    return response.json()
  })
}

/* 简单fetch：post */
const fetch_post = (url: string, params: Record<string, any> = {}, config:ResponseInit = {} ) => {
  return fetch(url, {
    ...config,
    body: JSON.stringify(params)
  }).then((response) => {
    return response.json()
  })
}

export const easyFetch = {
  get: fetch_get,
  post: fetch_post
}
