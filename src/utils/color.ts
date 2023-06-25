const hexPattern = /^(#?[0-9a-fA-F]{3}|#?[0-9a-fA-F]{6}|#?[0-9a-fA-F]{8})$/
const rgbaPattern = /(rgb|rgba)\(([^)]+)\)/;

/** 将RGB转化为HSL
 * 
 * @param RGB_Obj，其键值R,G,B分别为0~255的整数
 * @returns HSL_Obj，其键值H为0~360的数字，S，L为0~100的数字
 */
export function Rgb2HSL({R, G, B}: Record<'R'|'G'|'B', number>) {
  R /= 255, G /= 255, B /= 255;
  // A /= 100;

  const max = Math.max(R, G, B);
  const min = Math.min(R, G, B);
  let H, S, L = (max + min) / 2;

  if (max === min) {
    H = S = 0; // achromatic
  } else {
    const d = max - min;
    S = L > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case R: H = (G - B) / d + (G < B ? 6 : 0); break;
      case G: H = (B - R) / d + 2; break;
      case B: H = (R - G) / d + 4; break;
    }
    H /= 6;
  }
  
  H = Math.round(H * 360);
  S = Math.round(S * 100);
  L = Math.round(L * 100);

  return {H, S, L};
}

function Rgb2Hex({R, G, B}: Record<'R'|'G'|'B', number>){
  
}

// function Rgb2

/** 格式化十六进制色彩字符串
 * 
 * @param colorStr 
 * @returns colorHex
 */
function formatHex(colorStr: string){
  /* 校验颜色字符串 */
  if(!hexPattern.test(colorStr)){
    throw new Error('Wrong Color String!')
  }
  
  /* 先将#号拿掉 */
  if(/^#/.test(colorStr)){
    colorStr = colorStr.slice(1)
  }

  /* 扩写3位简写  & 删除不透明度 */
  if(colorStr.length === 3){
    colorStr = `${colorStr[0]}${colorStr[0]}${colorStr[1]}${colorStr[1]}${colorStr[2]}${colorStr[2]}`
  }else if(colorStr.length === 8){
    colorStr = colorStr.slice(0, 6)
  }
  // else if(colorStr.length === 6){
  //   colorStr = `${colorStr}FF`
  // }
  
  /* 最后返回的应为一个RGB色彩字符串 */
  return `#${colorStr}`
}

/** 将十六进制字符串解析为RGBA对象
 * 
 * @param Hex 
 * @returns RGBA_Obj
 */
function parseHex(Hex: string){
  Hex = Hex.slice(1)
  let R = parseInt(Hex.substring(0,2), 16);
  let G = parseInt(Hex.substring(2,4), 16);
  let B = parseInt(Hex.substring(4,6), 16);

  return { R, G, B }
}

/** 解析rgb & rgba 色彩字符串
 * 
 * @param colorStr 
 * @returns rgba_obj
 */
function parseRgb(colorStr: string){
  const rgbaPattern = /(rgb|rgba)\(([^)]+)\)/;
  const matches = colorStr.match(rgbaPattern)
  if(!matches){
    throw new Error('Wrong Color String!')
  }
  const arr = matches[2].split(',')
  if(arr.length<3 || arr.length>4){
    throw new Error('Wrong Color String!')
  }

  let R = Number(arr[0]),
      G = Number(arr[1]),
      B = Number(arr[2]);
  
  if(isNaN(R) || isNaN(G) || isNaN(B)){
    throw new Error('Wrong Color String!')
  }

  return { R, G, B }
  
}





export class CColor{
  hex: string
  rgbString: string
  rgbObj: Record<'R' | 'G' | 'B', number> | null
  hslObj: Record<'H' | 'S' | 'L', number> | null
  opacity: number
  constructor(color: string){
    // const hexPattern = /^(#?[0-9a-fA-F]{3}|#?[0-9a-fA-F]{6}|#?[0-9a-fA-F]{8})$/
    // const rgbaPattern = /(rgb|rgba)\(([^)]+)\)/;

    this.init()
    this.opacity = this.extractOpacity(color)

    if(hexPattern.test(color)){
      this.rgbObj = parseHex(formatHex(color))
    }else if(rgbaPattern.test(color)){
      this.rgbObj = parseRgb(color)
    }

    if(!this.rgbObj){
      throw new Error('parse fail!')
    }
    this.hslObj = Rgb2HSL(this.rgbObj)
    this.hex = formatHex(color)
  }

  init(){
    this.hex = ''
    this.rgbString = ''
    this.rgbObj = null
    this.hslObj = null
    this.opacity = 1
  }

  extractOpacity(color: string){
    let opacity = 1
    if(hexPattern.test(color)){
      if(/^#/.test(color)){
        color = color.slice(1)
      }
      if(color.length === 8){
        opacity = Math.round(parseInt(color.slice(6), 16) * 100 /255) / 100
        // color = color.slice(0, 6)
      }
      // if(color.length === 3){
      //   color = `${color[0]}${color[0]}${color[1]}${color[1]}${color[2]}${color[2]}`
      // }
    } else if(rgbaPattern.test(color)){
      const matches = color.match(rgbaPattern)
      if(!matches){
        throw new Error('Wrong Color String!')
      }
      const arr = matches[2].split(',')
      if(arr.length === 4){
        opacity = Number(arr[3])
      }
    }
    return opacity
  }
}
