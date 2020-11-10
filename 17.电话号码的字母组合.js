/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = new Map();
    map.set(2, 'abc');
    map.set(3, 'def');
    map.set(4, 'ghi');
    map.set(5, 'jkl');
    map.set(6, 'mno');
    map.set(7, 'pqrs');
    map.set(8, 'tuv');
    map.set(9, 'wxyz');

    const res = [];
    mysolution1(map, digits, 0, "", res);
    return res;
};

var mysolution1 = function(map, digits, index, ans, res){
    // terminator: index === digits.length
    if (index === digits.length){
        if (ans) res.push(ans);
        return;
    }
    // current logic and drill down
    let currDigit = Number(digits[index]);
    const str = map.get(currDigit);
    const len = str.length;
    for (let i = 0; i < len; i++){
        mysolution1(map, digits, index + 1, ans + str[i], res);
    }
}

var solution1 = function(digits, index, map, ans, res){
    // terminator
    if (index === digits.length){
        if (ans) res.push(ans);
        return res;
    }

    // current logic
    let letters = map.get(Number(digits[index]));
    const len = letters.length;
    for (let i = 0; i < len; i++){
        solution1(digits, index + 1, map, ans + letters[i], res);
    }
}
// @lc code=end

