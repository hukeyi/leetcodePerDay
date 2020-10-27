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
    return mysolution2(secret, guess);
};

// 两个hash表，最后比较得到cows
var mysolution1 = function(secret, guess){
    const len = secret.length;
    let hash1 = new Array(10).fill(0);
    let hash2 = new Array(10).fill(0);
    let bulls = cows = 0;

    for (let i = 0; i < len; i++){
        if (secret[i] === guess[i]){
            bulls++;
        }else{
            hash1[secret[i]]++;
            hash2[guess[i]]++;
        }
    }
    for (let i = 0; i < 10; i++){
        cows += Math.min(hash1[i], hash2[i]);
    }
    return bulls + "A" + cows + "B";
}

var mysolution2 = function(secret, guess){
    const len = secret.length;
    let bulls = cows = 0;
    let hash = new Array(10).fill(0);

    for (let i = 0; i < len; i++){
        if (secret[i] === guess[i]){
            bulls++;
        }else{
            if (hash[secret[i]]++ < 0) cows++;
            /**
             * if (hash[secret[i]] < 0) cows++;
             * hash[secret[i]]++;
             */
            if (hash[guess[i]]-- > 0) cows++;
        }
    }
    return bulls + "A" + cows + "B";
}
// @lc code=end

