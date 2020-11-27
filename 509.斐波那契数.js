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
    return solution2(N);
};

var solution1 = function(n){
    const memo = new Map();
    const recur = function(n, memo){
        if (n <= 1) return n;
        if (!memo.has(n)){
            memo.set(n, recur(n - 1, memo) + recur(n - 2, memo));
        }
        return memo.get(n);
    }
    return recur(n, memo);
}

var solution2 = function(n){
    const dp = [0, 1];
    for (let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
// @lc code=end

