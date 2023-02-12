/*

方法一：暴力枚举
思路及算法

最容易想到的方法是枚举数组中的每一个数 x，寻找数组中是否存在 target - x。

当我们使用遍历整个数组的方式寻找 target - x 时，需要注意到每一个位于 x 之前的元素都已经和 x 匹配过，因此不需要再进行匹配。
    而每一个元素不能被使用两次，所以我们只需要在 x 后面的元素中寻找 target - x。

var twoSum = function(nums, target) {  自己的

for(let i=0;i<nums.length-1;i++){


    for(let j=i+1;j<nums.length;j++)

    {
       if(nums[i]+nums[j]==target)
         return [i,j]
    }
     }
};

时间复杂度：O(N^2)，其中N 是数组中的元素数量。最坏情况下数组中任意两个数都要被匹配一次。

空间复杂度：O(1)。


*/
/*
注意到方法一的时间复杂度较高的原因是寻找 target - x 的时间复杂度过高。因此，我们需要一种更优秀的方法
     能够快速寻找数组中是否存在目标元素。如果存在，我们需要找出它的索引。
使用哈希表，可以将寻找 target - x 的时间复杂度降低到从 O(N)O(N) 降低到 O(1)O(1)。

这样我们创建一个哈希表，对于每一个 x，我们首先查询哈希表中是否存在 target - x，然后将 x 插入到哈希表中，即可保证不会让 x 和自己匹配。


时间复杂度：O(N)，其中 N 是数组中的元素数量。对于每一个元素 x，我们可以 O(1)O(1) 地寻找 target - x
空间复杂度：O(N)，其中 N 是数组中的元素数量。主要为哈希表的开销。


*/

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {       //遍历一次即可
    const complement = target - nums[i];
    if (map.has(complement)) {                 //如果有target - nums[i] 返回结果     has(key)  判断是否已经有key，返回布尔值  
      return [map.get(complement), i];         //                                     get(key)   返回value
    } else {
      map.set(nums[i], i);                     // 如果没有target - nums[i] 将当前的nums[i]存入哈希表  set(key,value)  存入哈希表
    }
  }
  return [];
};


//  Map    has()  set()    get()    delete()  forEach()

