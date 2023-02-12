/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
*/

var climbStairs = function (n) {
  const memo = [];
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};


function climbStairs(n) {
  if (n <= 2) {
    return n;
  }
  let before_last = 1, last = 2;
  for (let i = 2; i < n; i++) {          //节省空间
    let current = before_last + last;
    before_last = last;
    last = current;
  }
  return last;
}

