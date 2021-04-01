/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	return solution2(nums);
};
// 1. sort and brute force 3 loops
var solution1 = function (nums) {
	nums.sort((a, b) => a - b);
	const len = nums.length;
	const res = [];
	for (let k = 0; k < len - 2; k++) {
		if (!k || nums[k] !== nums[k - 1]) {
			for (let i = k + 1; i < len - 1; i++) {
				if (i === k + 1 || nums[i] !== nums[i - 1]) {
					for (let j = i + 1; j < len; j++) {
						if (j === i + 1 || nums[j] !== nums[j - 1]) {
							if (nums[k] + nums[i] + nums[j] === target) {
								res.push([nums[k], nums[i], nums[j]]);
							}
						}
					}
				}
			}
		}
	}
};
// 2. sort and triple pointers
var solution2 = function (nums) {
	nums.sort((a, b) => a - b);
	const res = [],
		len = nums.length;
	for (let k = 0; k < len - 2; k++) {
		if (nums[k] > 0) break;
		if (k > 0 && nums[k] === nums[k - 1]) continue;

		let sum = 0,
			i = k + 1,
			j = len - 1;
		while (i < j) {
			sum = nums[k] + nums[i] + nums[j];
			if (sum < 0) {
				while (i < j && nums[i] === nums[++i]);
			} else if (sum > 0) {
				while (i < j && nums[j] === nums[--j]);
			} else {
				res.push([nums[k], nums[i], nums[j]]);
				while (i < j && nums[i] === nums[++i]);
				while (i < j && nums[j] === nums[--j]);
			}
		}
	}
	return res;
};
// @lc code=end
