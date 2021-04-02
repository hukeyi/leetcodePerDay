/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	return solution2(nums);
};

// 1. 删所有零，在末尾加上
var solu1 = function (nums) {
	let len = nums.length;
	let i = 0;
	while (len--) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
		} else {
			i++;
		}
	}
};
// 2. 双指针，j指向非零的最后一位，i遍历数组
// 非零往前挪
var solu2 = function (nums) {
	const len = nums.length;
	let j = 0;
	for (let i = 0; i < len; i++) {
		if (nums[i] !== 0) {
			[nums[i], nums[j++]] = [nums[j], nums[i]];
		}
	}
};
// @lc code=end
