/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// my solution
// var plusOne = function(digits) {
//     let len = digits.length; //当前数字位数
//     let pos = len - 1;
//     for (; pos >= 0; pos--){
//         if (digits[pos] < 9){
//             digits[pos]++;
//             return digits;
//         }
//         if (pos === 0){
//             digits[pos] = 0;
//             digits.unshift(1);
//             return digits;
//         }
//         digits[pos] = 0;
//     }
// };

// best: 98.84 7.71
var plusOne = function (digits) {
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--){
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    let newNum = Array(len + 1).fill(0);
    newNum[0] = 1;
    return newNum;
};
// @lc code=end

