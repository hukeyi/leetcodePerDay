/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	return solution1(num);
};

var solution1 = function (num) {
	if (num < 2) return num;

	let [left, right] = [2, num];
	while (left <= right) {
		const mid = left + Math.floor((right - left) / 2);
		if (mid * mid === num) return true;
		else if (mid * mid < num) left = mid + 1;
		else right = mid - 1;
	}
	return false;
};

// newton
var mysolution2 = function (num) {
	if (num < 2) return true;
	let curr = num;
	while (curr * curr > num) {
		curr = Math.floor((curr + num / curr) / 2);
	}
	return curr * curr === num;
};
// @lc code=end
