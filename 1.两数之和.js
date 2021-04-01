/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// my solution
var twoSum = function (nums, target) {
	return solu3(nums, target);
};

// 1. brute force use indexOf()
var solu1 = function (nums, target) {
	const len = nums.length;
	for (let i = 0; i < len; i++) {
		const index = nums.indexOf(target - nums[i]);
		if (index !== -1 && index !== i) {
			return [i, index];
		}
	}
};
// 2. brute force use for-loop
var solu2 = function (nums, target) {
	const len = nums.length;
	for (let i = 0; i < len; i++) {
		const other = target - nums[i];
		for (let j = i + 1; j < len; j++) {
			if (other === nums[j]) return [i, j];
		}
	}
};

// 3. hash
var solu3 = function (nums, target) {
	const len = nums.length;
	const hash = {};
	for (let i = 0; i < len; i++) {
		const other = target - nums[i];
		if (other in hash) {
			return [i, hash[other]];
		}
		hash[nums[i]] = i;
	}
};
// @lc code=end
