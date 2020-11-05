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
        x = 1 / x;
        n *= (-1);
    }
    return solution2(x, n);
};

// 暴力 超时
var solution1 = function(x, n){
    if (n === 0) return 1;
    if (n < 0) {
        n *= (-1);
        x = 1 / x;
    }

    let factor = x;
    while (--n){
        x *= factor;
    }
    return x;
}

// 递归
var solution2 = function(x, n){
    if (n === 0) return 1;
    
    let factor = solution2(x, Math.floor(n / 2));
    return n % 2 === 0 ? factor * factor : factor * factor * x;
}
// @lc code=end