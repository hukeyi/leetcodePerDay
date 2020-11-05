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
    return mysolution2(n);
};

var mysolution1 = function(n){
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
            ans += i.toString();
        }
        res.push(ans);
    }
    return res;
}

var mysolution2 = function(n){
    let hashmap = new Map();
    hashmap.set(3, "Fizz");
    hashmap.set(5, "Buzz");
    let res = [];

    for (let i = 1; i <= n; i++){
        let ans = "";
        for (let key of hashmap.keys()){
            if (i % key === 0){
                ans += hashmap.get(key);
            }
        }
        if (ans === ""){
            ans += i.toString();
        }
        res.push(ans);
    }
    return res;
}
// @lc code=end

