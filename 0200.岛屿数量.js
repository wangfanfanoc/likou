//岛屿数量
var numIslands = function (grid) {
  let count = 0;

  //遍历二位数组的每一项
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count++; //遍历到一个1
        dfs(row, col); //继续深度遍历
      }
    }
  }

  function dfs(row, col) {
    //遍历结束的条件
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === "0"
    ) {
      return;
    }

    grid[row][col] = "0";
    dfs(row, col - 1);
    dfs(row, col + 1);
    dfs(row - 1, col);
    dfs(row + 1, col);
  }

  return count;
};
