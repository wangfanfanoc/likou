/*
二分搜索的应用

例子：对于旋转数组 nums = [4,5,6,7,0,1,2]
  首先根据 nums[0] 与 target 的关系判断 target 是在左段还是右段。
  例如 target = 5, 目标值在左半段，因此在 [4, 5, 6, 7, inf, inf, inf] 这个有序数组里找就行了；
  例如 target = 1, 目标值在右半段，因此在 [-inf, -inf, -inf, -inf, 0, 1, 2] 这个有序数组里找就行了

*/

var search = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
      let mid =  Math.floor((right + left) /2);
      if (nums[mid] === target) {
          return mid;
      }

      // 先根据 nums[0] 与 target 的关系判断目标值是在左半段还是右半段
      if (target >= nums[0]) {
          // 目标值在左半段时，若 mid 在右半段，则将 mid 索引的值改成 Infinity
          if (nums[mid] < nums[0]) {
              nums[mid] = Infinity;
          }
      } else {
          // 目标值在右半段时，若 mid 在左半段，则将 mid 索引的值改成 -Infinity
          if (nums[mid] >= nums[0]) {
              nums[mid] = -Infinity;
          }
      }

      if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return -1;
};