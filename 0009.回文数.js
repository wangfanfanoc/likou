/**
 * @param {number} x
 * @return {boolean}
 */
//双指针
var isPalindrome = function (x) {
  if (x < 0)
    return false

  let str = x.toString()
  let head = 0
  let end = str.length - 1

  while (end > head) {
    if (str[head] != str[end])
      return false
    end--
    head++
  }
  return true
};
console.log(isPalindrome(10));

//
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString()
  return str == str.split('').reverse().join('')
};