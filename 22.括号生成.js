/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    mysolution1(0, 0, n, "", res);
    return res;
};

var mysolution1 = function(left, right, max, ans, res){
    // terminator
    if (left === max && right === max){
        res.push(ans);
        return;
    }
    // current logic and drill down
    if (left < max) mysolution1(left + 1, right, max, ans + '(', res);
    if (right < left) mysolution1(left, right + 1, max, ans + ')', res);
}
// @lc code=end

