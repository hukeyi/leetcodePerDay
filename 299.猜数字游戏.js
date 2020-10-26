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
    return solution2(secret, guess);
};
// o(n)
var solution1 = function (secret, guess){
    const len = secret.length;
    let bulls = cows = 0;
    let numbers = new Array(10).fill(0);
    for (let i = 0; i < len; i++){
        if (secret[i] === guess[i]){
            bulls++;
        }else{
            if (numbers[secret[i]]++ < 0) cows++;
            if (numbers[guess[i]]-- > 0) cows++;
        }
    }
    return bulls + "A" + cows + "B";
}
// o(n)
var solution2 = function (secret, guess){
    const len = secret.length;
    let bulls = cows = 0;
    let nums1 = new Array(10).fill(0);
    let nums2 = new Array(10).fill(0);

    for (let i = 0; i < len; i++){
        if (secret[i] === guess[i]){
            bulls++;
        }else{
            nums1[secret[i]]++;
            nums2[guess[i]]++;
        }
    }
    for (let i = 0; i < 10; i++){
        cows += Math.min(nums1[i], nums2[i]);
    }
    return bulls + "A" + cows + "B";
}
// @lc code=end

