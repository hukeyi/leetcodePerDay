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
    let res = [], ans = nums.slice();
    const len = nums.length;

    const backtrack = function(len, first, ans, res){
        if (first === len){
            res.push(ans.slice());
            return res;
        }
        for (let i = first; i < len; i++){
            [ans[i], ans[first]] = [ans[first], ans[i]];
            backtrack(len, first + 1, ans, res);
            [ans[i], ans[first]] = [ans[first], ans[i]];
        }
    }
    backtrack(len, 0, ans, res);
    return res;
}
// @lc code=end

