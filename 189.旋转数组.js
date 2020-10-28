/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k){
    rotate1(nums, k);
}

// 暴力，pop数组末尾，然后push到队前
var rotate1 = function(nums, k){
    while(k--){
        nums.unshift(nums.pop());
    }
}

// 环状替代
var rotate2 = function (nums, k){
    const len = nums.length;
    k %= len;
    let count = 0;
    for (let start = 0; count < len; start++){
        let cur = start;
        let pre = nums[cur];
        do {
            let next = (cur + k) % len;
            [nums[next], pre] = [pre, nums[next]];
            cur = next;
            count++;
        }while(start != cur);
    }
}

// 反转
var reverse = function (nums, start, end){
    while (start < end){
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// e.g. 1,2,3,4,5 k=2
// 先将所有数字反转
// 5,4,3,2,1
//然后反转0-1: 4,5,3,2,1
// 然后反转2-4: 4，5，1，2，3
var rotate3 = function (nums, k){
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}
// @lc code=end

