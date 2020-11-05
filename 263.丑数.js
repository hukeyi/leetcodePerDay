/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    return mysolution2(num);
};

var mysolution1 = function(num){
    if (num <= 0) return false;

    while (num % 2 === 0) num /= 2;
    while (num % 3 === 0) num /= 3;
    while (num % 5 === 0) num /= 5;
    return num === 1;
}

var mysolution2 = function(num){
    for (let p of [2, 3, 5]){
        while (num && num % p === 0){
            num /= p;
        }
    }
    return num === 1;
}
// @lc code=end

