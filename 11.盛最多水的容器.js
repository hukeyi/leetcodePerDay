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

// 暴力遍历 time limit exceeded
var solu1 = function (height) {
	const len = height.length;
	let max = 0;
	for (let i = 0; i < len - 1; i++) {
		for (let j = i + 1; j < len; j++) {
			let area = (j - i) * Math.min(height[i], height[j]);
			max = Math.max(area, max);
		}
	}
	return max;
};

var solution1 = function (height) {
	const len = height.length;
	let max = 0;
	for (let i = 0; i < len - 1; i++) {
		for (let j = i + 1; j < len; j++) {
			let area = (j - i) * Math.min(height[j], height[i]);
			max = Math.max(area, max);
		}
	}
	return max;
};

// 直觉记忆，为什么能走通没想通
// 因为短指针已经限制了高度，如果移动高指针不可能增加整体的高度，
// 同时底长在不断减少，所以移动短指针来尝试增加最大高度
// 只要将移动指针理解成将当前的下一步所有状态中值较小的全部排除掉就可以了
// o(n)
var solution2 = function (height) {
	const len = height.length;
	let max = 0;
	let i = 0,
		j = len - 1;
	while (i < j) {
		let minHeight = height[i] < height[j] ? height[i++] : height[j--];
		let area = (j - i + 1) * minHeight;
		max = Math.max(max, area);
	}
	return max;
};
// @lc code=end
