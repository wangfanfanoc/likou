/* 回溯问题
经典递归解法，观察发现
1、某一次递归终止时需要将当前字符存入数组
2、 字符任取一个位置左侧必 左括号>=右括号
3、每次递归除了需要传当前字符还需要记清当前左右括号数

*/

//回溯
var generateParenthesis = function (n) {
    let result = []
    let left = 1
    let right = 0
    let s = '('

    let fuc = (s, left, right, n) => {
        if (right > left)      //先写终止条件
            return s
        if (left > n)
            return s
        if (s.length == n * 2)
            return result.push(s)

        fuc(s + '(', left + 1, right, n)
        fuc(s + ')', left, right + 1, n)
    }
    fuc(s, left, right, n)
    return result
};

// //dfs  深度优先遍历
// var generateParenthesis = function (n) {
//     let res = [];
//     //  cur :当前字符 ; left：当前字符左括号 ; right:当前字符右括号
//     const help = (cur, left, right) => {
//         if (cur.length === 2 * n) {
//             res.push(cur);
//             return;
//         }
//         if (left < n) {      //左侧小于n时
//             help(cur + "(", left + 1, right)
//         }
//         if (right < left) {
//             help(cur + ")", left, right + 1);
//         }
//     };
//     help("", 0, 0);
//     return res;
// };




//dp
/* 
动态规划
定义状态：
dp[i] 是一个数组，表示由 i 对括号生成的所有组合。

状态转移：
对于 0 <= j <= i-1, k = i - 1 - j，将 dp[j] 中所有的组合与 dp[k] 中所有的组合分别取出来，一一合并。
合并的时候不能将 dp[j] 中每一种组合与 dp[k] 中每一种组合直接合并，因为那样有重复的情况，不利于排除。
例如：
当 j = 1, k = 2 时：
dp[j] = ['()'];
dp[k] = ['()()', '(())'];
如果直接组合，得到的结果为：[ '( ) ( ) ( ) ', ' ( ) ( ( ) ) ' ]。
当 j = 2, k = 1 时：
dp[j] = ['()()', '(())'];
dp[k] = ['()']
如果直接组合，得到的结果为：[ ' ( ) ( ) ( ) ', ' ( ( ) ) ( ) ' ]。
此时会出现重复的情况：'()()()'。
而应该用一对括号将 dp[j] 中每一种组合括起来，并把 dp[k] 中每一种组合应该放到括号右边，这样就能保证合并之后每一种状态都是唯一的。

例如：
当 j = 1, k = 2 时：
dp[j] = ['()'];
dp[k] = ['()()', '(())'];
如果将 dp[j] 括起来再组合，得到的结果为：[ ' ( ( ) ) ( ) ( ) ', ' ( ( ) ) ( ( ) ) ' ]。
当 j = 2, k = 1 时：
dp[j] = ['()()', '(())'];
dp[k] = ['()'];
如果将 dp[j] 括起来再组合，得到的结果为：[ ' ( ( ) ( ) ) ( ) ', ' ( ( ( ) ) ) ( ) ' ]。
此时就没有重复的情况出现了。

初始状态：

dp[i] = [];
dp[0] = [''];
dp[1] = ['()'];

*/
var generateParenthesis = function (n) {
    const dp = new Array(n + 1).fill(false).map(() => []);
    dp[0] = [''];
    dp[1] = ['()'];
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            let k = i - 1 - j;
            // dp[i] += dp[j] * dp[k];
            for (let jj = 0; jj < dp[j].length; jj++) {
                for (let kk = 0; kk < dp[k].length; kk++) {
                    dp[i].push(`(${dp[j][jj]})${dp[k][kk]}`);
                }
            }
        }
    }
    // console.log(dp[n]);
    return dp[n];
};

