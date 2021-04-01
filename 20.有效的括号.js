/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	return solu2(s);
};

var solu1 = function (s) {
	if (s.length % 2 !== 0) return false;
	const stack = [];
	for (const ch of s) {
		if (ch === '(') stack.push(')');
		else if (ch === '{') stack.push('}');
		else if (ch === '[') stack.push(']');
		else if (!stack.length || ch !== stack.pop()) return false;
	}
	return stack.length === 0;
};

var solu2 = function (s) {
	if (s.length % 2 !== 0) return false;

	const match = { '(': ')', '{': '}', '[': ']' };
	const stack = [];
	for (const ch of s) {
		if (ch in match) stack.push(ch);
		else if (match[stack.pop()] !== ch) return false;
	}
	return stack.length === 0;
};
// @lc code=end
