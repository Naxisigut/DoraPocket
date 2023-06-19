/** 复制指定文本到剪切板
 * 
 * @param string 
 * @returns undefined
 */
export const copyText = (str: string) => {
  const ipt = document.createElement('input')
  ipt.value = str
  document.body.appendChild(ipt)
  ipt.select()
  const copyRes = document.execCommand('copy')
  document.body.removeChild(ipt)
  return copyRes
}

export const call = (phoneNumber: string) => {
  window.location.href = "tel://" + phoneNumber
}