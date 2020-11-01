/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
// o(1)
var addDigits = function(num) {
    return (num - 1) % 9 + 1;
};

// 递归
// var addDigits = function(num){
//     if (num < 10) {
//         return num;
//     }
//     let next = 0;
//     while (num != 0) {
//         next = next + num % 10;
//         num = Math.floor(num / 10);
//     }
//     return addDigits(next);
// }

// 迭代
// var addDigits = function(num){
//     while (num >= 10) {
//         let next = 0;
//         while (num != 0) {
//             next = next + num % 10;
//             num = Math.floor(num / 10);
//         }
//         num = next;
//     }
//     return num;
// }
// @lc code=end

