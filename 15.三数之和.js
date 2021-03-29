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
// brute force exceed time
var solu1 = function (nums) {
	nums.sort((a, b) => a - b);

	const len = nums.length;
	let res = [];
	for (let i = 0; i < len - 2; i++) {
		if (i === 0 || nums[i - 1] !== nums[i]) {
			for (let j = i + 1; j < len - 1; j++) {
				if (j === i + 1 || nums[j - 1] !== nums[j]) {
					for (let k = j + 1; k < len; k++) {
						if (k === j + 1 || nums[k] !== nums[k - 1]) {
							if (nums[k] + nums[i] + nums[j] === 0) {
								res.push([nums[i], nums[j], nums[k]]);
							}
						}
					}
				}
			}
		}
	}
	return res;
};

var solution2 = function (nums) {
	const len = nums.length;
	nums.sort((a, b) => a - b);
	const res = [];

	for (let k = 0; k < len - 2; k++) {
		if (nums[k] > 0) break;
		if (k > 0 && nums[k] === nums[k - 1]) continue;

		let i = k + 1,
			j = len - 1,
			sum = 0;
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
