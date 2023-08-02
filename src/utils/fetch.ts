import moduleName from '@';

export function fetchOpenAi(url: string){
  return new Promise<any>((resolve, reject) => {
    fetch(url).then((response) => {
      // console.log(response);
      // if(response.status !== 200){
      //.json()返回一个Promise，其结果为json parse后的对象
      response.ok ? resolve(response.json()) : reject(new Error(response.status.toString()))
    })
    .catch((err) => {
      reject(err)
    })
    
  })
}
