/*  给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
var lengthOfLongestSubstring = function (s) {
        let p = 0; let pre = 0;
        let set = new Set();
        let maxlength = 0;
        let current = 0
        while (p < s.length) {    //  这里！！！
            if (!set.has(s[p]))   //没有该元素时
            {
                set.add(s[p])
                curent = p - pre + 1
                maxlength = Math.max(maxlength, curent)
                p++
            }
            else {
                set.delete(s[pre])
                pre++
            }
   
        }
        return maxlength
    };

*/
//  双指针法     当set中没有重复元素的时候j向后移动且set.add(s[j])，直到有重元素
//               当set中有重复的元素时候，i向后移且set.delete(s[i]);，直到没有重复元素

var lengthOfLongestSubstring = function (s) {
  const set = new Set();      //创建一个set 用来查重     set里面一直存的都是当前无重复字符的最长子串
  let i = 0,                 //  指向最长字串头部的指针
    j = 0,                     //指向最长字串尾部的指针
    maxLength = 0;
  if (s.length === 0) {
    return 0;
  }

  for (j; j < s.length; j++) {             //   j在移动
    if (!set.has(s[j])) {                 // 当set中没有s[j]时 将s[j]添加到set中
      set.add(s[j]);
      maxLength = Math.max(maxLength, set.size);   // 比较当前长度与最大长度
    } else {
      while (set.has(s[j])) {                 // 当set中有s[j]时，删除s[i],直到没有s[j]为止，再将s[j]放入set
        set.delete(s[i]);
        i++;                                  //   i向后移动
      }
      set.add(s[j]);
    }
  }

  return maxLength;
};

//    Set常用方法      has()   add()   delete()  forEach()
