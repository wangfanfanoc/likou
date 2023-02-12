var combinationSum = function (candidates, target) {
  let arr = []
  let result = []
  let sum = 0
  dfs = (candidates, target, sum, arr, start) => {
    if (sum == target) {
      return result.push([...arr])
    }
    if (sum > target) {              //剪枝
      return
    }
    for (let i = start; i < candidates.length; i++) {    //start
      sum = sum + candidates[i]
      arr.push(candidates[i])
      dfs(candidates, target, sum, arr, i)
      sum = sum - arr.pop()
    }
  }
  dfs(candidates, target, sum, arr, 0)
  return result
};
console.log(combinationSum([2, 3, 6, 7], 7));

/*
排列问题，讲究顺序（即 [2, 2, 3] 与 [2, 3, 2] 视为不同列表时），需要记录哪些数字已经使用过，此时用 used 数组；
组合问题，不讲究顺序（即 [2, 2, 3] 与 [2, 3, 2] 视为相同列表时），需要按照某种顺序搜索，此时使用 begin 变量。
注意：具体问题应该具体分析， 理解算法的设计思想 是至关重要的，请不要死记硬背。
*/
