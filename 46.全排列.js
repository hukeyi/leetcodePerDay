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

var mysolution1 = function (nums){
    const len = nums.length, res = [], ans = nums.slice();
    const backtrack = function(nums, index, ans, res){
        if (nums.length === index){
            res.push(ans.slice());
            return;
        }
        for (let i = index; i < len; i++){
            [ans[index], ans[i]] = [ans[i], ans[index]];
            backtrack(nums, index + 1, ans, res);
            [ans[index], ans[i]] = [ans[i], ans[index]];
        }
    }
    backtrack(nums, 0, ans, res);
    return res;
}
// @lc code=end

