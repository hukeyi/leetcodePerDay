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
	return solution4(n);
};
// 1. 递归, time exceeded
var solution1 = function (n) {
	if (n <= 0) return 0;
	if (n <= 2) return n;

	return solution1(n - 1) + solution1(n - 2);
};
// 2. 迭代，动态规划
var solution2 = function (n) {
	const dp = [1, 1];
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};
// 3. double pointers
var solution3 = function (n) {
	if (n <= 0) return 0;
	if (n <= 2) return n;

	let a = (b = 1);
	while (n--) {
		a = (b += a) - a;
	}
	return a;
};
// 4. double pointers
var solution4 = function (n) {
	if (n <= 0) return 0;
	if (n <= 2) return n;

	let oneStep = (twoSteps = 1),
		allWay = 2;
	for (let i = 3; i <= n; i++) {
		[oneStep, twoSteps, allWay] = [twoSteps, allWay, twoSteps + allWay];
	}
	return allWay;
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
