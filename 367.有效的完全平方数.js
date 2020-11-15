/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    return solution2(num);
};

// 暴力：3012ms
// 1. 从1 - num，除以，如果商等于除数，则返回true
// 2. 否则返回false
var solution1 = function(num){
    for (let i = 1; i <= Math.ceil(num / 2); i++){
        if (num / i === i) return true;
    } 
    return false;
}

// 二分查找 fastest
var solution2 = function(num){
    if (num < 2) return true;
    let left = 2, right = Math.floor(num / 2), guessRes;
    while (left <= right){
        x = Math.floor((left + right) / 2);
        guessRes = x * x;
        if (guessRes === num) return true;
        if (guessRes > num) right = x - 1;
        else left = x + 1;
    }
    return false;
}

// bald: 80ms
// 牛顿
var solution3 = function(num){
    r = num;
    while (r*r > num)
        r = ((r + num/r) / 2) | 0;
    return r*r == num;
}
// @lc code=end

