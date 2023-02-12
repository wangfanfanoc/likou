/**
 * @param {number} x
 * @return {number}
 */

//1、字符串操作
var reverse = function (x) {
  let result = ''
  if (x >= 0) {
    result = x.toString().split('').reverse().join('')
  }
  else
    result = '-' + Math.abs(x).toString().split('').reverse().join('')
  const trueAns = Number(result);
  if (trueAns < -(2 ** 31) || trueAns > (2 ** 31 - 1)) { //注意平方
    return 0;
  }

  return trueAns
};