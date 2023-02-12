function swap(nums, left, right) {
  let middle = nums[left]
  nums[left] = nums[right]
  nums[right] = middle
}

/*分为三个部分 
left之前的都是0，不包括left
left 到i之间的都是1
right之后的都是2,不包括2
            ！！注意else 很重要
*/
var sortColors = function (nums) {
  let left = 0
  let right = nums.length - 1
  let i = 0
  while (i <= right) {
    if (nums[i] == 0) {
      swap(nums, i, left)
      left++
      i++                            //i++ 可以确定交换过来的是0 或者 1
    }
    else if (nums[i] == 1)
      i++
    else if (nums[i] == 2) {
      swap(nums, i, right)
      right--                  //i不能++  因为需要判断一下交换来的是哪个数字
    }
  }
  return nums
};