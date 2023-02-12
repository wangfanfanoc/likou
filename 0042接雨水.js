
//双指针法
/*下标 i 处能接的雨水量由 leftMax[i] 和 rightMax[i] 中的最小值决定
  维护两个指针 left 和 right，以及两个变量 leftMax 和 rightMax，
  初始时 left=0,right=n-1,leftMax=0,rightMax=0,。指针left 只会向右移动，指针 right 只会向左移动，
  在移动指针的过程中维护两个变量 leftMax 和 rightMax 的值。
 
  当两个指针没有相遇时，进行如下操作：
1、使用 height[left] 和 height[right] 的值更新 leftMax 和 rightMax 的值；
如果 height[left]<height[right]，则必有leftMax<rightMax，下标left 处能接的
雨水量等于 leftMax−height[left]，将下标 left 处能接的雨水量加到能接的雨水总量，
然后将 left 加 1（即向右移动一位）；
2、如果 height[left]≥height[right]，则必有leftMax≥rightMax，
下标 right 处能接的雨水量等于 rightMax−height[right]，将下标right 处能接的雨水量加到能接的雨水总量，
然后将 right 减 1（即向左移动一位）。
  当两个指针相遇时，即可得到能接的雨水总量
*/
var trap = function (height) {
  let sum = 0;
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  while (left < right) {          //两个指针没有相遇时
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
      sum = sum + leftMax - height[left];
      left++;
    } else {
      sum = sum + rightMax - height[right];
      right--;
    }
  }
  return sum;
};


/*  */
