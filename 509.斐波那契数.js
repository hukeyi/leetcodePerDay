/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    // const memo = new Map();
    // return solution1 (N, memo);
    return solution2(N);
};

// up to bottom
// clever recursion
var solution1 = function(n, memo){
    if (n <= 1) return n;
    if (!memo.has(n)){
        memo.set(n, (solution1(n - 1, memo) + solution1(n - 2, memo)));
    }
    return memo.get(n);
}

// bottom up
var solution2 = function(n){
    const dp = [0, 1];
    for (let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
// @lc code=end

