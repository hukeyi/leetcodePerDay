/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return solution2(nums);
};

var solution2 = function(nums){
    let [left, right] = [0, nums.length - 1];
    while (left < right){
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    return nums[right];
}

var mysolution1 = function(nums){
    let [left, right] = [0, nums.length - 1];
    if (nums.length === 1 || nums[right] > nums[left]) return nums[0];

    while (left <= right){
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < nums[mid - 1]) return nums[mid];
        if (nums[mid] > nums[mid + 1]) return nums[mid + 1];

        if (nums[mid] > nums[0]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}
// @lc code=end

