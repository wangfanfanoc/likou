/*
如果不存在为 0 的数，那么肯定能到达最后一个位置
除最后一位外，如果 i 位置为 0，那么向前查找是否存在 j 位置使得  nums[j] > i-j
最后一位是否为 0 不影响结果，所以不用判断 */

var canJump = function (nums) {
  let len = nums.length;
  let pos = undefined;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] === 0 && pos === undefined)
      pos = i;
    if (pos !== undefined && nums[i] > pos - i)
      pos = undefined
  }
  return pos === undefined
};



/* 贪心的本质是选择每一阶段的局部最优，从而达到全局最优
关键在于以当前为起点可跳的覆盖范围。因此问题转化为跳跃覆盖范围可不可以覆盖到终点，
每次取最大跳跃步数（取最大覆盖范围），最后看最大覆盖范围，看是否能到终点，
可以用贪心的方法解决这个问题。
。 */

var canJump = function (nums) {
  let cover = 0                  // cover 能覆盖的最远距离
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(nums[i] + i, cover)
    if (cover >= nums.length - 1)
      return true
  }
  return false
};

