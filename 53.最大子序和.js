/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return solution1(nums);
};

var solution1 = function(nums){
    let ans = nums[0]; let sum = 0;
    for (const num of nums){
        sum = (sum > 0) ? sum + num : num;
        ans = Math.max(ans, sum);
    }
    return ans;
}
// @lc code=end

