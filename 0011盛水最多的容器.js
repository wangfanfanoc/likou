
/* 


在初始时，左右指针分别指向数组的左右两端，它们可以容纳的水量为 min(1, 7) * 8 = 8min(1,7)∗8=8。
此时我们需要移动一个指针。移动哪一个呢？直觉告诉我们，应该移动对应数字较小的那个指针（即此时的左指针）。这是因为，由于容纳的水量是由
两个指针指向的数字中较小值 * 指针之间的距离决定的。如果我们移动数字较大的那个指针，那么前者「两个指针指向的数字中较小值」不会增加，
后者「指针之间的距离」会减小，那么这个乘积会减小。因此，我们移动数字较大的那个指针是不合理的。因此，我们移动 数字较小的那个指针。


时间复杂度：O(N)，双指针总计最多遍历整个数组一次。
空间复杂度：O(1)，只需要额外的常数级别的空间。

//  双指针法   贪心法：做出在当前看来最好的选择
*/
var maxArea = function (height) {
    let left = 0; let right = height.length - 1            //注意右边是 right = height.length - 1   
    let max = (right - left) * Math.min(height[left], height[right])
    while (left != right) {
        if (height[left] < height[right]) {             //比较左右两端的高度
            if (height[left + 1] > height[left]) 
            { max = Math.max(max, (right - left - 1) * Math.min(height[left + 1], height[right])) }
            left++
        }
        else {
            if (height[right - 1] > height[right]) { max = Math.max(max, (right - left - 1) * Math.min(height[left], height[right - 1])) }
            right--

        }

    }
    return max

}





///暴力求解     时间复杂度O(N^2)

var maxArea = function (height) {
    let max = 0
    for (let left = 0; left < height.length; left++) {
        let maxright = 0
        for (let right = height.length; right > left; right--)
            if (height[right] > maxright && height[left]) {
                h = Math.min(height[right], height[left])
                maxright = height[right]
                max = Math.max(max, h * (right - left))
            }
    }
    return max
};



    //

