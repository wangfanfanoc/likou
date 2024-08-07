const longestPalindromeSubseq = (s) => {
  const strLen = s.length;
  let dp = Array.from(Array(strLen), () => Array(strLen).fill(0));

  for (let i = 0; i < strLen; i++) {
    dp[i][i] = 1;
  }

  for (let i = strLen - 1; i >= 0; i--) {
    for (let j = i + 1; j < strLen; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][strLen - 1];
};
