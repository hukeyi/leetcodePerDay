/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	return solution3(nums);
};

// brute force: run time error
var solution1 = function (nums) {
	const len = nums.length,
		res = [];
	if (len === 1) return nums[0];

	for (let i = 0; i < len; i++) {
		let sum = nums[i];
		res.push(sum);
		for (let j = i + 1; j < len; j++) {
			sum += nums[j];
			if (nums[j] > 0) {
				res.push(sum);
			}
		}
	}
	return Math.max(...res);
};

// dp
// dp(i) = Max(dp(i-1), 0) + nums[i]
var solution2 = function (nums) {
	const len = nums.length;
	if (len === 0) return 0;
	if (len === 1) return nums[0];

	const dp = [nums[0]];
	let max = dp[0];
	for (let i = 1; i < len; i++) {
		dp[i] = Math.max(dp[i - 1], 0) + nums[i];
		if (dp[i] > max) max = dp[i];
	}
	return max;
};

var solution3 = function (nums) {
	let ans = nums[0],
		sum = 0;
	for (const num of nums) {
		sum = sum > 0 ? sum + num : num;
		ans = Math.max(ans, sum);
	}
	return ans;
};
// @lc code=end
