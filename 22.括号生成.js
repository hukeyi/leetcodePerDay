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
    solution1(0, 0, n, "", res);
    return res;
};

var solution1 = function (left, right, max, ans, res){
    // end
    if (left === max && right === max){
        res.push(ans);
        return res;
    }
    // current
    if (left < max) solution1(left + 1, right, max, ans + "(", res);
    if (left > right) solution1(left, right + 1, max, ans + ")", res);
    // drill down
}
// @lc code=end

