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
    return solution2(num);
};

var solution1 = function(n){
    if (n <= 0) return false;

    while (n % 2 === 0) n /= 2;
    while (n % 3 === 0) n /= 3;
    while (n % 5 === 0) n /= 5;
    return n === 1;
}

var solution2 = function(n){
    for (let p of [2, 3, 5]){
        while (n && n % p === 0){
            n /= p;
        }
    }
    return n === 1;
}

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

