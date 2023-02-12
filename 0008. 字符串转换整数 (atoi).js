/**
 * @param {string} s
 * @return {number}
 */
/*

parseInt(string, radix)：
string：要被解析的值。如果参数不是一个字符串，则将其转换为字符串。字符串开头的空白符将会被忽略。
radix（可选）：需要转换的进制，介于 2 到 36。
返回值： 如果被解析参数的第一个字符无法被转化成数值类型，则返回NaN。

*/

var myAtoi = function (str) {
  const number = parseInt(str, 10);

  if (isNaN(number)) {
    return 0;
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {   //平方
    return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  } else {
    return number;
  }
};

//利用正则

var myAtoi = function (str) {
  let result = str.trim().match(/^[-|+]{0,1}[0-9]+/)
  if (result != null) {
    if (result[0] > (Math.pow(2, 31) - 1)) {
      return Math.pow(2, 31) - 1
    }
    if (result[0] < Math.pow(-2, 31)) {
      return Math.pow(-2, 31)
    }

    return result[0]
  }

  return 0
};

