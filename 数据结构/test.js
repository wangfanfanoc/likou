
// let index=nums.indexOf(1)
// let middle =nums[index]
// let ismiddle
// if(index==-1)
// {
//  middle=1
//  ismiddle=false
// }

// function swap(nums, left, right) {
//   let middle
//   middle = nums[left]
//   nums[left] = nums[right]
//   nums[right] = middle
// }


// function fc(nums) {
//   let left = 0
//   let right = nums.length - 1
//   let i = 0
//   while (i <= right) {
//     if (nums[i] == 0) {
//       swap(nums, i, left)
//       left++
//       i++
//     }
//     if (nums[i] == 1)
//       i++
//     if (nums[i] == 2) {
//       swap(nums, i, right)
//       right--
//     }
//   }
//   return nums
// }

// console.log(fc([2, 0, 2, 1, 1, 0]));
// var exist = function (board, word) {
//   let border = [[0, 1], [0, -1], [1, 0], [-1, 0]], //定义上下左右四个方向
//     col = board.length, //行数
//     row = board[0].length, //列数
//     marked = [...Array(col)].map(v => Array(row).fill()); //同行列空矩阵，用于记录已经访问的

//   //空数组直接返回false
//   if (!col) return false;

//   let backTracing = (i, j, markeds, boards, words) => {
//     //截取所有的字符，说明已经找到
//     if (!words.length) {
//       return true;
//     }
//     for (let p = 0; p < border.length; p++) {
//       let curi = i + border[p][0]; //左右方向
//       let curj = j + border[p][1]; //上下方向

//       //判断边界，且找到了第一个字符
//       if ((curi >= 0 && curi < col) && (curj >= 0 && curj < row && boards[curi][curj] == words[0])) {
//         //已经用过，直接跳过
//         if (markeds[curi][curj] == 1) {
//           continue
//         }
//         //标记为已使用
//         markeds[curi][curj] = 1;
//         //接着找下一个字符
//         if (backTracing(curi, curj, markeds, boards, words.substring(1))) {
//           return true
//         } else {
//           //使用完重置掉
//           markeds[curi][curj] = 0;
//         }
//       }
//     }
//     return false
//   }

//   for (let i = 0; i < col; i++) {
//     for (let j = 0; j < row; j++) {
//       if (board[i][j] === word[0]) {
//         //找到第一个字符，标记为已经使用
//         marked[i][j] = 1;
//         //进入回溯
//         if (backTracing(i, j, marked, board, word.substring(1))) {
//           return true
//         } else {
//           //重置状态
//           marked[i][j] = 0;
//         }
//       }
//     }
//   }
//   return false
// };
// const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
// const word = "ABCCED"


// console.log(exist(board, word));
// let a = 0;
// if (a == 0) {
//   a++;
//   console.log("aaa");
// }
// if (a == 1) {
//   a++;
//   console.log("bbb");
// }
// if (a == 2) {
//   a++;
//   console.log("ccc");
// }
// if (a == 3) {
//   a = 2;
//   console.log("ddd");
// }
// else if (a == 2) {
//   a++;
//   console.log("eee");
// }
// else if (a == 2 || a == 3) {

// }
// var singleNumber = function (nums) {
//   const set = new Set()
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       set.delete(nums[i])
//     }
//     else
//       set.add(nums[i])
//   }
//   console.log(set.forEach((item) => console.log(item)));
// }

// console.log(singleNumber([2, 2, 1]));

// console.log([2, 2, 1].includes(2, 2));
// .toString()
// .valueOf()



// console.log(new String('123'));
// console.log(new String('123').valueOf());
// console.log(new String('123').toString());

// console.log(new Array('1', 1));
// console.log(new Array('1', 1).valueOf());
// console.log(new Array('1', 1).toString());

// console.log(new Number('123'));
// console.log(new Number('123').valueOf());
// console.log(new Number('123').toString());

// console.log({});
// console.log({}.valueOf());
// console.log({}.toString());

// console.log([]);
// console.log([].valueOf());
// console.log([].toString());

