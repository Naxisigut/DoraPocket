/** 将字符串或整型数字补零至指定位数
 * 
 * @param target 
 * @param length 
 * @returns 
 */
export const zeroPadPre = (target:number | string, length:number = 1) => {
  if(typeof target === 'number')target = target.toString()
  while(target.length < length){
    target = '0' + target
  }
  return target
}