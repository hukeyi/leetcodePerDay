/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    return solution1(prices);
};

// 暴力 two loop 300ms
var solution1 = function(prices){
    const len = prices.length;
    let profit = 0;
    for (let i = 0; i < len - 1; i++){
        for (let j = i + 1; j < len; j++){
            if (prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i];
            }
        }
    }
    return profit;
}
// @lc code=end

