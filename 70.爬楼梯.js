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

var climbStairs = function (n) {
	return solu4(n);
};
// 递归
var solu1 = function (n) {
	if (n <= 0) return 0;
	if (n <= 2) return n;

	return solu1(n - 1) + solu1(n - 2);
};

// 迭代
var solu2 = function (n) {
	const dp = [];
	dp[0] = dp[1] = 1;
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};

// 神奇方法
var solu3 = function (n) {
	if (n <= 0) return 0;
	if (n <= 2) return n;

	let a = (b = 1);
	while (n--) {
		a = (b += a) - a;
	}
	return a;
};

var solu4 = function (n) {
	if (n <= 0) return 0;
	if (n <= 2) return n;
	let step1 = 1,
		step2 = 1,
		all_way = 2;
	for (let i = 3; i <= n; i++) {
		[step1, step2, all_way] = [step2, all_way, step2 + all_way];
	}
	return all_way;
};
// @lc code=end
