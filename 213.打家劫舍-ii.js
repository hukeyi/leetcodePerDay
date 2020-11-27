/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    return mysolution1(nums);
};

var mysolution1 = function(nums){
    const len = nums.length;
    if (len === 0) return 0;
    if (len === 1) return nums[0];
    const dp = function(nums){
        let pre = cur = 0;
        for (let num of nums) {
            [cur, pre] = [Math.max(pre + num, cur), cur];
        }
        return cur;
    }
    return Math.max(dp(nums.slice(0, len - 1)), dp(nums.slice(1, len)));
}
// @lc code=end

