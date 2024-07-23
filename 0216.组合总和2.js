var combine = function (k, n) {
  //之和为n 的k个数
  let arr = [];
  let result = [];
  dfs = (n, k, start, sum) => {
    if (arr.length > k || sum > n) {
      return;
    }
    if (arr.length == k && sum === n) {
      //递归结束的条件
      result.push([...arr]);
      return;
    }
    for (let i = start; i <= n; i++) {
      //for决定每个节点的分支数
      let ss = sum + i;
      arr.push(i);
      dfs(n, k, i + 1, ss); //递归 决定每个子树的深度
      ss = ss - i;
      arr.pop(); //递归完成后，回溯到当前一层,继续进行操作
    }
  };

  dfs(arr, n, k, 1, 0);
  return result;
};
