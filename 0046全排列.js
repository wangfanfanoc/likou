// var permute = function (nums) {
//   let result = []
//   let arr = []
//   let bool = []
//   for (let i = 0; i < nums.length; i++)
//     bool[i] = false
//   dfs = (arr, bool, nums) => {
//     if (arr.length == nums.length) {   //递归结束条件
//       result.push([...arr])
//       return
//     }

//     for (let i = 0; i < nums.length; i++) {   //for 决定节点分叉的个数
//       if (bool[i])
//         continue
//       else {           //else里的代码属于同一层，一定要执行完，
//         arr.push(nums[i])
//         bool[i] = true
//         dfs(arr, bool, nums)                 //递归 回溯到此处
//         bool[nums.indexOf(arr.pop())] = false
//       }
//     }
//     // return    到这里代码执行完毕，默认有一个return
//   }
//   dfs(arr, bool, nums)
//   return result
// };

var permute = function (nums) {
  let result = [];
  let arr = new Set();
  dfs = (nums) => {
    if (arr.size == nums.length) {
      //set 的长度是size
      result.push([...arr]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      //for 决定节点分叉的个数
      if (arr.has(nums[i]))
        //已经选过的不能再选
        continue;
      else {
        //else里的代码属于同一层，一定要执行完，
        arr.add(nums[i]);
        dfs(nums); //递归 回溯到此处
        arr.delete(nums[i]);
      }
    }
    // return    到这里代码执行完毕，默认有一个return
  };
  dfs(nums);
  return result;
};

console.log(permute([1, 2, 3]));
