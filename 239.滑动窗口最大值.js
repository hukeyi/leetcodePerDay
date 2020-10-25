/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = [];
    const len = nums.length;
    for (let i = 0; i < len - k + 1; i++){
        let temp = nums.slice(i, i + k);
        res.push(Math.max(...temp));
    }
    return res;
};
// @lc code=end

