
//  题目要求返回去重后的长度

// set集合方法
var removeDuplicates = function (nums) {
    var arr = new Set(nums)
    nums.splice(0)
    arr.forEach(item => {
        nums.push(item)
    })
    return nums.length
};


//   最简单的方式  但是没有在原数组中操作
var removeDuplicates = function (nums) {
    var arr = new Set(nums)
    nums = [...arr]
    return nums.length
};

//   修改如下
var removeDuplicates = function (nums) {
    let set = new Set(nums);
    let arr = [...set];
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }
    return arr.length;
};


// slice() 与 splice()
var removeDuplicates = function (nums) {
    let len = nums.length;
    for (let i = 1; i < len;) {
        //slice(i,j) 截取下标i开始，下标j（不包括）结束的子数组
        if (nums.slice(0, i).indexOf(nums[i]) !== -1) {//  判断重复项，同样适用于数组没有排序的情况
            nums.splice(i, 1);//删除下标从i开始的，长度为1的子数组
            len--;
        }
        else i++;

    }
    return len;
};

// 原地操作
var removeDuplicates = function (nums) {
    let len = 1;
    for (let i = 1; i < nums.length;) {
        if (nums[i] == nums[i - 1]) {
            i++;
        } else {
            nums[len++] = nums[i++];
        }
    }
    return len;
};

