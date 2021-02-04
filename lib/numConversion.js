// 將數字轉為中文
export const numConversion = (n) => {
  let uppercase = '千百亿千百十万千百十'
  let newStr = ''
  uppercase = uppercase.substr(uppercase.length - n.length)
  for (let i = 0; i < n.length; i++) {
    newStr += '一二三四五六七八九'.charAt(n[i] - 1) + uppercase.charAt(i + 1)
  }
  return newStr
}
