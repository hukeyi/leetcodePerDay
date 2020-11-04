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
    mysolution2(nums, k);
}

var mysolution1 = function(nums, k){
    while (k--){
        nums.unshift(nums.pop());
    }
}

var reverse = function (nums, start, end){
    while (start < end){
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

var mysolution2 = function (nums, k){
    const len = nums.length;
    k %= len;

    reverse(nums, 0, len - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, len - 1);
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
// @lc code=end

