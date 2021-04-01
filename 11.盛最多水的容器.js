/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	return solution2(height);
};

// 1. brute force time exceeded
var solution1 = function (heights) {
	const len = heights.length;
	let max = 0;
	for (let i = 0; i < len - 1; i++) {
		for (let j = i + 1; j < len; j++) {
			let minHeight = Math.min(heights[i], heights[j]);
			max = Math.max(max, minHeight * (j - i));
		}
	}
	return max;
};
// 2. double pointers
// 左右边界各一个指针，高度更小的往中间挪（为了得到更大的最小高度）
// 因为往中间挪的过程中，宽度在减小，所以只有得到更大高度才可能得到更大面积
var solution2 = function (heights) {
	const len = heights.length;
	let i = 0,
		j = len - 1,
		max = 0;
	while (i < j) {
		const minHeight = heights[i] < heights[j] ? heights[i++] : heights[j--];
		max = Math.max(max, (j - i + 1) * minHeight);
	}
	return max;
};
// @lc code=end
