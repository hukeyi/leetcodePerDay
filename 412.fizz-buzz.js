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
    return solution2(n);
};

// 暴力
var solution1 = function(n){
    let res = [];
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            res.push("FizzBuzz");
        }else if (i % 3 === 0){
            res.push("Fizz");
        }else if (i % 5 === 0){
            res.push("Buzz");
        }else{
            res.push(i.toString());
        }
    }
    return res;
}

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
            ans = i.toString();
        }
        res.push(ans);
    }
    return res;
}

// 自由映射关系
var solution3 = function(n){
    let hashmap = new Map();
    hashmap.set(3, "Fizz");
    hashmap.set(5, "Buzz");
    let res = [];
    for (let i = 1; i <= n; i++){
        let ans = "";
        for (let key of hashmap){
            if (i % key === 0){
                ans += hashmap[key];
            }
        }
        if (ans === ""){
            ans = i.toString();
        }
        res.push(ans);
    }
    return res;
}
// @lc code=end

