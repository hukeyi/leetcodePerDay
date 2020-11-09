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
var permute = function(nums) {
    let res = [], ans = nums.slice();

    const backtrack = function(len, ans, res, first){
        if (first === len){
            res.push(ans.slice());
            return;
        }
        for (let i = first; i < len; i++){
            [ans[first], ans[i]] = [ans[i], ans[first]];
            backtrack(len, ans, res, first + 1);
            [ans[first], ans[i]] = [ans[i], ans[first]];
        }
    }
    const len = nums.length;
    backtrack(len, ans, res, 0);
    return res;
};
// @lc code=end

