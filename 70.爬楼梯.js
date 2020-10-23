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

 var climbStairs = function(n) {
    return solution3(n);
 }

 var solution1 = function(n){
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
 }

 var solution2 = function(n) {
    let a = b = 1;
    while (n--){
        a = (b += a) - a;
    }
    return a;
 }

 var solution3 = function(n) {
    if (n <= 0) return 0;
    if (n <= 2) return n;

    let one_step = 1;
    let two_step = 1;
    let all_way = 2;
    for (let i = 3; i <= n; i++){
    one_step = two_step;
    two_step = all_way;
    all_way = one_step + two_step;
    }
    return all_way;
 }
// @lc code=end

