/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	return solution2(n);
};

// for loop
var solution1 = function (n) {
	const str = n.toString(2);
	const len = str.length;
	let count = 0;
	for (let i = 0; i < len; i++) {
		str[i] === '1' && count++;
	}
	return count;
};
// 位运算
var solution2 = function (n) {
	let count = 0;
	while (n) {
		n &= n - 1;
		count++;
	}
	return count;
};
// @lc code=end
