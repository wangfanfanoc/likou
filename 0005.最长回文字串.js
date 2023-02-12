
/*  求最长回文子串 

中心扩散算法        自己的

本质即为：我们枚举所有的「回文中心」并尝试「扩展」，直到无法扩展为止，此时的回文串长度即为此「回文中心」下的最长回文串长度。
    我们对所有的长度求出最大值，即可得到最终的答案。    
*/

var longestPalindrome = function (s) {
  if (s == '' || s.length < 1) {
    return "";
  }
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);              //奇数回文串
    let len2 = expandAroundCenter(s, i, i + 1);          //偶数回文串
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);        //js 的/ 不是地板除，结果是小数，地板除是Math.floor()
      end = i + Math.floor(len / 2);
    }
  }
  return (s.slice(start, end + 1))                  //slice(start,end)  不包括end , 截取字符串 不改变原字符串


  function expandAroundCenter(s, left, right) {         //left right为回文串的两个中心

    while (left >= 0 && right < s.length && s[left] == s[right]) {    //  s[left] == s[right]一定要写在while中
      left--;
      right++;
    }
    return right - left - 1;
  }
}



//==========================================================================================================================

var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }

  let start = 0;
  let maxLength = 1;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1);
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
};

//


//  动态规划    基本思想 用一个表来记录已经解决的子问题的答案，不管这个子问题是否以后会被用到，只要他被计算过就填入表中
//  从一个比较小的规模的问题开始 逐个得到较大规模的问题的解，在这个过程中 记录每一步的结果

//  dp[i,j]表示s[i...j]是否为回文串
var longestPalindrome = function (s) {
  //dp[i][j]=dp[i+1][j-1]&&s1[i]===s1[j]
  //初始化二维数组
  const s1 = s.split('')
  const len = s.length
  let maxLen = 1
  let start = 0
  //
  let dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len);              //注意二维数组的创建方式
    for (let j = 0; j < len; j++) {
      dp[i][j] = 0;
    }
    dp[i][i] = 1
  }
  //先枚举答案字串长度，从长度最小的子问题开始
  for (let j = 1; j <= len; j++) {       //先按列遍历 
    //枚举左边界
    for (let i = 0; i < j; i++) {      // 再按行遍里

      if (s1[i] !== s1[j]) {       //当串两端不相等时
        dp[i][j] = 0
      }
      else {                      //当串两端相等时
        if (j - i < 3) {   //如果子串长度小于等于3，是回文串
          dp[i][j] = 1
        }
        else {              //字串长度大于3，看一下内部是不是回文串
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        start = i
      }
    }
  }
  return (s1.slice(start, start + maxLen).join(''))
};




