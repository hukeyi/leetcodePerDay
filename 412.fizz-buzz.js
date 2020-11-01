/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

const { RSA_NO_PADDING } = require("constants");

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return solution3(n);
};

// 自由映射：哈希表 o(n)
// 为了保证输出正确顺序的字符串，使用Map
var solution3 = function(n){
    let hashmap = new Map();
    hashmap.set(3, 'Fizz');
    hashmap.set(5, 'Buzz');
    let res = [];

    for (let i = 1; i <= n; i++){
        let ans = "";
        for (let [key, value] of hashmap){
            if (i % key === 0){
                ans += value;
            }
        }
        if (ans === ""){
            ans = JSON.stringify(i);
        }
        res.push(ans);
    }
    return res;
}

// 暴力 1 loop o(n)
var solution1 = function(n){
    let res = [];
    for (let i = 1; i <= n; i++){
        if ((i % 3) !== 0 && (i % 5) !== 0){
            res.push(JSON.stringify(i));
            continue;
        }
        if (i % 3 === 0){
            if (i % 5 === 0){
                res.push("FizzBuzz");
            }else{
                res.push("Fizz");
            }
        }else{
            res.push("Buzz");
        }
    }
    return res;
}

// 暴力：字符串连接，减少条件判断
var solution2 = function(n){
    let res = [];
    for (let i = 1; i <= n; i++){
        let ans = "";
        if (i % 3 === 0){
            ans += "Fizz";
        }
        if (i % 5 === 0){
            ans += "Buzz";
        }
        if (ans === ""){
            ans = JSON.stringify(i);
        }
        res.push(ans);
    }
    return res;
}
// @lc code=end

