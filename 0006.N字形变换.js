/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//去尾 找周期，取模运算
var convert = function (s, numRows) {
  if (numRows == 1)  //考虑为1的情况
    return s
  let result = new Array(numRows).fill('')  //数组初始化
  let d = 2 * numRows - 2
  for (let i = 0; i <= s.length - 1; i++) {
    let mod = i % d
    if (mod <= numRows - 1)
      result[mod] += s[i]
    else
      result[numRows * 2 - 2 - mod] += s[i]
  }
  return result.join('')
};

console.log(convert('PAYPALISHIRING', 3));