/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => {return a - b;});
    const len = nums.length;
    let res = [];
    for (let k = 0; k < len - 2; k++){
        if (nums[k] > 0) break;
        if (k > 0 && nums[k] === nums[k - 1]) continue;
        let i = k + 1, j = len - 1;

        while (i < j){
            let sum = nums[k] + nums[i] + nums[j];
            if (sum < 0){
                while (i < j && nums[i] === nums[++i]);
            }else if (sum > 0){
                while (i < j && nums[j] === nums[--j]);
            }else{
                res.push([nums[k], nums[i], nums[j]]);
                while (i < j && nums[i] === nums[++i]);
                while (i < j && nums[j] === nums[--j]);
            }
        }
    }
    return res;
};
// @lc code=end

