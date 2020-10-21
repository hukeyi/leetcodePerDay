/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 74.31, 9.3
// var climbStairs = function (n) {
//   let a = b = 1;
//   while (n--){
//       a = (b += a) - a;
//   }
//   return a;
// };

// 54.95, 10.25
// var climbStairs = function (n) {
//     if (n <= 0) return 0;
//     if (n <= 2) return n;
//     let dp = [];
//     dp[0] = dp[1] = 1;
//     for (let i = 2; i <= n; i++){
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }
//     return dp[n];
// };

// 8.36, 11.64
var climbStairs = function (n) {
    if (n <= 0) return 0;
    if (n <= 2) return n;

    let one_step_before = 1;
    let two_step_before = 1;
    let all_ways = 2;
    for (let i = 3; i <= n; i++){
        two_step_before = one_step_before;
        one_step_before = all_ways;
        all_ways = one_step_before + two_step_before;      
    }
    return all_ways;
};
// @lc code=end

