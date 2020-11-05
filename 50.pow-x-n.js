/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) return myPow(1 / x, -1 * n);

    while (n--){
        x *= x;
    }
    return x;
};
// @lc code=end

