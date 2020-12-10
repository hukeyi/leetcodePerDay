/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	return solution2(nums);
};
// 自底向上
var solution1 = function (nums) {
	const len = nums.length;
	if (len === 0) return 0;

	const dp = [0, nums[0]];
	for (let i = 2; i <= len; i++) {
		dp[i] = Math.max(dp[i - 1], nums[i - 1] + dp[i - 2]);
	}
	return dp[len];
};

// recur and memo
var solution2 = function (nums) {
	const len = nums.length;
	if (len === 0) return 0;

	const memo = new Map();
	const dp = function (index, memo) {
		// terminator
		if (index < 0) {
			return 0;
		}
		if (memo.has(index)) {
			return memo.get(index);
		}

		// current logic and drill down
		memo.set(index, Math.max(dp(index - 1), nums[index - 1] + dp(index - 2)));
	};
	dp(len - 1, memo);
	return memo.get(len - 1);
};
// @lc code=end
