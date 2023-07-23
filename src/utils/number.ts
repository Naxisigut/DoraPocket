/* v1.01 */

/* 获取min~max之间的随机整数 */
export function getRandomNumber(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 获取min~max之间随机整数的工厂函数 */
export function getRandomNumberFactory(min:number, max:number) {
  return function() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}

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

/** 只保留字符串内的数字
 * 
 * @param val 
 * @returns 
 */
export const sanitize2Number = (val:string) => {
  return val.replace(/[^0-9]/g, '')
}
/** 只保留字符串内的数字，小数点
 * 
 * @param val 
 * @returns 
 */
export const sanitize2NumberDot = (val:string) => {
  return val.replace(/[^0-9.]/g, '')
}
/** 只保留字符串内的数字，负号
 * 
 * @param val 
 * @returns 
 */
export const sanitize2NumberMinus = (val:string) => {
  return val.replace(/[^0-9-]/g, '')
}
/** 只保留字符串内的数字，负号，小数点
 * 
 * @param val 
 * @returns 
 */
export const sanitize2NumberMinusDot = (val:string) => {
  return val.replace(/[^0-9.-]/g, '')
}
/** 将字符串最前面的连续0+数字替换为该数字
 *  如 0001 => 1
 * @param val 
 * @returns 
 */
export const sanitizeSequentialZero = (val: string)=>{
  return val.replace(/^0+(?=\d)/, '')
}
/** 只保留字符串内的首个小数点
 *  如 1.2.3 => 1.23
 * @param val 
 * @returns 
 */
export const sanitize2OneDot = (val: string)=>{
  return val.replace('.','$#$').replace(/\./g,'').replace('$#$','.')
}
/** 只保留字符串的位于最开头的负号
 * 如 -1-2 => -12, 1-2 => 12
 * @param val 
 * @returns 
 */
export const sanitize2FirstMinus = (val: string)=>{
  return val.replace(/(?<=.)-/g,'')
}