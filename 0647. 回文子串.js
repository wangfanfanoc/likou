/**
 * @param {string} s
 * @return {number}
 */

// dp 动态规划

//dp[i][j] i到j 之间的字串是否是回文的

var countSubstrings = function (s) {
  //dp[i][j]=dp[i+1][j-1]&&s1[i]===s1[j]
  //初始化二维数组
  const s1 = s.split("");
  const len = s.length;
  //   let maxLen = 1
  //   let start = 0
  let nums = 0;
  //
  let dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len); //注意二维数组的创建方式
    for (let j = 0; j < len; j++) {
      dp[i][j] = 0;
    }
    dp[i][i] = 1;
  }
  //先枚举答案字串长度，从长度最小的子问题开始
  for (let j = 1; j <= len; j++) {
    //先按列遍历
    //枚举左边界
    for (let i = 0; i < j; i++) {
      // 再按行遍里

      if (s1[i] !== s1[j]) {
        //当串两端不相等时
        dp[i][j] = 0;
      } else {
        //当串两端相等时
        if (j - i <= 3) {
          //如果子串长度小于等于3，是回文串
          dp[i][j] = 1;
        } else {
          //字串长度大于3，看一下内部是不是回文串
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (dp[i][j] == 1) nums++;
    }
  }
  return nums;
};
