/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	return mysolution1(n);
};

var mysolution1 = function (n) {
	const res = [];
	const recur = function (left, right, max, ans) {
		if (left === max && right === max) {
			res.push(ans.slice());
			return;
		}
		if (left < max) recur(left + 1, right, max, ans + '(');
		if (right < left) recur(left, right + 1, max, ans + ')');
	};
	recur(0, 0, n, '');
	return res;
};
// @lc code=end
