/*二分法  二分查找适用于有序序列
二分法：先找到这个数组中中间的数，将要查找的数与这个数做对比，如果比中间的数小，
以这个数为分界，找到这个数左边中间的数；如果比中间的数大，以这个数为分界，找到这个数右边中间的数
以此类推，直到找到这个数为止。*/

//二分法 递归
function search1(arr, find, left, right) {
  if (find < arr[left] || find > arr[right] || left > right) {
    return -1;
  }
  middle = Math.floor((left + right) / 2);
  if (find < arr[middle]) {
    return search1(arr, find, left, middle - 1);
  } else if (find > arr[middle]) {
    return search1(arr, find, middle + 1, right);
  } else {
    return middle;
  }
}
//二分法 循环实现
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

// let arr=[1,2,3,4,5]
// console.log(search(arr, 4, 0, arr.length));

/*快速排序法
把一个数组排序可以用快速排序法
在一个数组中找到一个作为基准的数，把数组中的其它数和这个基准数作比较，如果比这个基准数小，
放在基准数的左边，如果比基准数大，放在基准数的右边。。。直到排序出来为止
   */

const quickSort = (array) => {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    //left是数组的第一位   right是最后一位
    if (left >= right) {
      //如果左边的索引大于等于右边的索引说明整理完毕
      return;
    }
    let i = left; //i从开头遍历
    let j = right; //j从末尾遍历
    const baseVal = arr[j]; // 取无序数组最后一个数为基准值
    while (i < j) {
      //把所有比基准值小的数放在左边 大的数放在右边
      while (i < j && arr[i] <= baseVal) {
        //找到一个比基准值大的数交换
        i++; //i开始遍历  当都比基准小的时候，i++
      }
      arr[j] = arr[i]; // 将较大的值放在右边 如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
      while (i < j && arr[j] >= baseVal) {
        //找到一个比基准值小的数交换
        j--;
      }
      arr[i] = arr[j]; // 将较小的值放在左边 如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
    }
    arr[j] = baseVal; // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
    sort(arr, left, j - 1); // 将左边的无序数组重复上面的操作
    sort(arr, j + 1, right); // 将右边的无序数组重复上面的操作
  };
  const newArr = array.concat(); // 为了保证这个函数是纯函数拷贝一次数组
  sort(newArr);
  return newArr;
};

//快速排序 巧妙实现

recQucikSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  let goal = arr[0];
  let minArr = arr.slice(1).filter((item) => item <= goal);
  let maxArr = arr.slice(1).filter((item) => item > goal);
  return recQucikSort(minArr).concat([goal]).concat(recQucikSort(maxArr));
};

// console.log(recQucikSort(a));
console.log(quickSort([0, 0, 2, 1, 2, 1]));
