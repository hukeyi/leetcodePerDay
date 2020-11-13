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
    if (n < 0){
        n *= (-1);
        x = 1 / x;
    }
    return mysolution2(x, n);
};

var mysolution1 = function(x, n){
    let res = 1;
    while (n--){
        res *= x;
    }
    return res;
}

var mysolution2 = function(x, n){
    if (n === 0) return 1;

    // current logic
    // drill down
    let factor = mysolution2(x, Math.floor(n / 2));
    return (n % 2 === 0) ? factor * factor :  factor * factor * x;
}
// @lc code=end