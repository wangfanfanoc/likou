const lengthOfLIS = (nums) => {
  let dp = Array(nums.length).fill(1);
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    //位置i的最递增子序列等于j从0到i-1各个位置的最长递增子序列 + 1 的最大值。
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    result = Math.max(result, dp[i]);
  }

  return result;
};
