/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    return mysolution1 (coins, amount);
};

var mysolution1 = function(coins, amount){
    if (amount === 0) return 0;
    coins.sort((a, b) => b - a);
    let ans = [Infinity];
    const dfs = function(coins, amount, index, count, ans){
        if (amount === 0){
            ans[0] = Math.min(ans[0], count);
            return;
        }
        if (index === coins.length) return;
        for (let i = Math.floor(amount / coins[index]); i >= 0 && i + count < ans[0]; i--){
            dfs(coins, amount - i * coins[index], index + 1, count + i, ans);
        }
    }
    dfs(coins, amount, 0, 0, ans);
    return ans[0] === Infinity ? -1 : ans[0];
}
// @lc code=end

