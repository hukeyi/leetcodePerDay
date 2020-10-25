/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    return goodSolution(secret, guess);
};

var goodSolution = function (secret, guess){
    const len = secret.length;
    let a = b = 0;
    let numbers = new Array(10).fill(0);

    for (let i = 0; i < len; i++){
        if (secret[i] === guess[i]){
            a++;
        }else{
            if (numbers[secret[i]]++ < 0) b++;
            if (numbers[guess[i]]-- > 0) b++;
        }
    }
    return a + "A" + b + "B";
}

var goodSolution2 = function (secret, guess){
    let a = b = 0;
    const len = secret.length;
    let num1 = new Array(10).fill(0);
    let num2 = new Array(10).fill(0);

    for (let i = 0; i < len; i++){
        if (secret[i] === guess[i]){
            a++;
        }else{
            num1[secret[i]]++;
            num2[guess[i]]++;
        }
    }
    for (let i = 0; i < 10; i++){
        b += Math.min(num1[i], num2[i]);
    }
    return a + "A" + b + "B";
}
// @lc code=end

