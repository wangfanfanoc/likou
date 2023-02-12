
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let len = nums.length, result = [];  // 数组result用来存结果
  if (nums[0] > 0) return result; // 如果排序后第一个元素大于0，那么不可能能凑成三元组

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1])  // 去重遍历  先确定第一个数！！
      continue;
    let left = i + 1;         // 左右指针初始化  指向第二个数 第三个数
    let right = len - 1;

    while (left < right) {
      if (nums[left] + nums[i] + nums[right] > 0) {
        right--; // 如果大于0，右指针左移，让和小一点
      } else if (nums[left] + nums[i] + nums[right] < 0) {
        left++; // 如果小于0，左指针右移，让和大一点
      }
      else {    //正好等于0，找到了答案
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[right] === nums[right - 1]) {
          right--;      //对第二个数字进行去重
        }
        while (left < right && nums[left] === nums[left + 1]) {
          left++;       //对第三个数字进行去重
        }
        // 找到一个符合条件的三元组了，两指针同时收缩
        right--;
        left++;
      }
    }
  }
  return result;
};



//
var threeSum = function (nums) {
  const result = [];
  nums.sort(function (a, b) {    // 先排序  注意要方法的使用
    return a - b;
  });

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1,
        end = nums.length - 1;
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          result.push([nums[i], nums[start], nums[end]]);
          start++;
          end--;
          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--;
          }
        } else if (nums[i] + nums[start] + nums[end] < 0) {
          start++;
        } else {
          end--;
        }
      }
    }
  }

  return result;
};

//

// var threeSum = function (nums) {   找错
//   nums.sort((a, b) => a - b);
//   let result = []
//   for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] == nums[i - 1])
//       continue
//     let left = i + 1
//     let right = nums.length - 1

//     while (left < right) {
//       if (nums[i] + nums[left] + nums[right] < 0) {
//         left++
//       }
//       if (nums[i] + nums[left] + nums[right] > 0) {
//         right--
//       }
//       else {
//         result.push([nums[i], nums[left], nums[right]]);
//         while (left < right && nums[right] === nums[right - 1]) {
//           right--; // 去重
//         }
//         while (left < right && nums[left] === nums[left + 1]) {
//           left++; // 去重
//         }
//         // 找到一个符合条件的三元组了，两指针同时收缩
//         right--;
//         left++;
//       }
//     }
//   }
//   return result
// };