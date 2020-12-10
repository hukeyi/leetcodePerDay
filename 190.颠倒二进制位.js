/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
	return solution2(n);
};

var solution1 = function (n) {
	let binaryStr = n.toString(2).split('').reverse().join('').padEnd(32, 0);
	return parseInt(binaryStr, 2);
};

var solution2 = function (n) {
	let digits = 32,
		r = 0;
	while (digits--) {
		r = (r << 1) + (n & 1);
		n >>= 1;
	}
	return r >>> 0;
};
// @lc code=end
