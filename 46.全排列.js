/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums){
    return mysolution1(nums);
}

var mysolution1 = function(nums){
    const res = [], ans = nums.slice();
    const backtrack = function(nums, index, ans, res){
        if (index === nums.length){
            res.push(ans.slice());
            return;
        }

        for (let i = index; i < nums.length; i++){
            [ans[i], ans[index]] = [ans[index], ans[i]];
            backtrack(nums, index + 1, ans, res);
            [ans[i], ans[index]] = [ans[index], ans[i]];
        }
    }
    backtrack(nums, 0, ans, res);
    return res;
}
// @lc code=end

