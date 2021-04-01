/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
	return solu2(heights);
};

// 1. brute force
var solu1 = function (heights) {
	const len = heights.length;
	let max = 0;
	for (let i = 0; i < len; i++) {
		let left = i - 1,
			right = i + 1;
		while (left >= 0 && heights[left] >= heights[i]) left--;
		while (right < len && heights[right] >= heights[i]) right++;
		max = Math.max(max, (right - left - 1) * heights[i]);
	}
	return max;
};
// 2. single stack
// return top of the stack
var top = function (stack) {
	return stack.length ? stack[stack.length - 1] : 0;
};
// stack stores the index
var solu2 = function (heights) {
	const stack = [];
	let max = 0;
	heights.push(0);
	heights.unshift(0);
	const len = heights.length;
	for (let i = 0; i < len; i++) {
		// start push stack
		// first, deal with the one cannot fit in the stack
		// 1. empty stack 2. new val > top stack val
		while (stack.length && heights[i] < heights[top(stack)]) {
			const curr = stack.pop();
			const left = top(stack) + 1, // left不能直接等于curr；
				// 如果等于curr将会忽略到之前已经pop出去的
				// 比heights[curr]更高的，可以向左边延伸的柱子
				right = i;
			max = Math.max(max, (right - left) * heights[curr]);
		}
		stack.push(i);
	}
	return max;
};
// @lc code=end
