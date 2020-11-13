/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    return solution1(digits);
};

var solution1 = function(nums){
    const map = new Map();
    map.set(2, 'abc');
    map.set(3, 'def');
    map.set(4, 'ghi');
    map.set(5, 'jkl');
    map.set(6, 'mno');
    map.set(7, 'pqrs');
    map.set(8, 'tuv');
    map.set(9, 'wxyz');

    const res = [];
    const backtrack = function(nums, map, index, ans, res){
        if (index === nums.length){
            if (ans) res.push(ans);
            return;
        }
        // current logic and drill down
        const str = map.get(Number(nums[index]));
        for (let ch of str){
            backtrack(nums, map, index + 1, ans + ch, res);
        }
    }
    backtrack(nums, map, 0, "", res);
    return res;
}
// @lc code=end

