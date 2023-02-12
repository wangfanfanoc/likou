/*
回溯 + 剪枝

*/


var exist = function (board, word) {
  let border = [[0, 1], [0, -1], [1, 0], [-1, 0]], //定义上下左右四个方向
    row = board.length, //行数
    col = board[0].length, //列数
    marked = [...Array(row)].map(v => Array(col).fill()); //同行列空矩阵，用于记录已经访问的

  //空数组直接返回false
  if (!row) return false;

  let backTracing = (i, j, markeds, boards, words) => {
    //截取所有的字符，说明已经找到
    if (!words.length) {
      return true;
    }
    for (let p = 0; p < border.length; p++) {     //回溯里的for循环
      let curi = i + border[p][0]; //改变i
      let curj = j + border[p][1]; //改变j

      //判断边界，且找到了第一个字符
      if ((curi >= 0 && curi < col) && (curj >= 0 && curj < row && boards[curi][curj] == words[0])) {
        //已经用过，直接跳过
        if (markeds[curi][curj] == 1) {
          continue
        }
        //标记为已使用
        markeds[curi][curj] = 1;
        //接着找下一个字符
        if (backTracing(curi, curj, markeds, boards, words.substring(1))) {
          return true
        } else {
          //使用完重置掉
          markeds[curi][curj] = 0;
        }
      }
    }
    return false
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0]) {
        //找到第一个字符，标记为已经使用
        marked[i][j] = 1;
        //进入回溯
        if (backTracing(i, j, marked, board, word.substring(1))) {
          return true
        } else {
          //重置状态
          marked[i][j] = 0;
        }
      }
    }
  }
  return false
};