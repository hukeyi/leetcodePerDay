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
    solution2(0, 0, n, "", res);
    return res;
};

var solution2 = function(left, right, max, ans, res){
    if (left === max && right == max){
        res.push(ans);
        return;
    }

    // current process
    if (left < max) solution2(left + 1, right, max, ans + "(", res);
    if (right < left) solution2(left, right + 1, max, ans + ")", res);
}
// @lc code=end

