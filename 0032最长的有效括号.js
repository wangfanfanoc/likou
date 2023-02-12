
/* 1、动态规划
定义 dp[i] 表示以下标 i 字符结尾的最长有效括号的长度。我们将dp 数组全部初始化为0 。
显然有效的子串一定以 ')' 结尾，因此我们可以知道以 '(' 结尾的子串对应的 dp 值必定为 0 ，
我们只需要求解 ')' 在 dp 数组中对应位置的值 

 对以 ) 结尾的dp[i]使用状态转移方程  dp[i]=2+dp[i-1]+dp[i-dp[i-1]-2]
*/
const longestValidParentheses = (s) => {
    let maxLen = 0;
    const len = s.length;
    const dp = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
        if (s[i] == ')') {          //当s[i]为')'时
            if (s[i - 1] == '(') {     //s[i-1]为'('  此时配对成功
                if (i - 2 >= 0) {        //若i-2存在 则加上前一个字串长度dp[i-2]
                    dp[i] = dp[i - 2] + 2;
                } else {                 // 若i-2不存在 dp[i]=2
                    dp[i] = 2;
                }
            }

            else      //当s[i-1]为')'  此时跳过dp[i - 1]个长度
                if (s[i - dp[i - 1] - 1] == '(') {     //若为'(' 匹配成功
                    if (i - dp[i - 1] - 2 >= 0) {            //判断匹配的'('的前一个是否存在
                        dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
                        //内部字串长度  //基础长度   //前面相邻能合并的长度
                    } else {
                        dp[i] = dp[i - 1] + 2;
                    }
                }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
};









/*2、栈，
我们始终保持栈底元素为当前已经遍历过的元素中「最后一个没有被匹配的右括号的下标」，
这样的做法主要是考虑了边界条件的处理，栈里其他元素维护左括号的下标：

  对于遇到的每个 '(' ，我们将它的下标放入栈中
  对于遇到的每个 ')' ，我们先弹出栈顶元素表示匹配了当前右括号：
    如果栈为空，说明当前的右括号为没有被匹配的右括号，我们将其下标放入栈中来更新
      我们之前提到的「最后一个没有被匹配的右括号的下标」
    如果栈不为空，当前右括号的下标减去栈顶元素即为「以该右括号为结尾的最长有效括号的长度」
我们从前往后遍历字符串并更新答案即可。

需要注意的是，如果一开始栈为空，第一个字符为左括号的时候我们会将其放入栈中，
这样就不满足提及的「最后一个没有被匹配的右括号的下标」，为了保持统一，
我们在一开始的时候往栈中放入一个值为 -1−1 的元素。
。 */
const longestValidParentheses2 = (s) => {
    let maxLen = 0;
    const stack = [];
    stack.push(-1);   //首次将-1入栈
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c == '(') {       // 左括号的索引，入栈
            stack.push(i);
        } else {              // 遍历到右括号
            stack.pop();        // 栈顶的左括号被匹配，出栈
            if (stack.length) { // 栈未空
                const curMaxLen = i - stack[stack.length - 1]; // 计算有效连续长度
                maxLen = Math.max(maxLen, curMaxLen);          // 挑战最大值
            } else {            // 栈空了
                stack.push(i);    // 将对应的下标值入栈
            }
        }
    }
    return maxLen;
};
