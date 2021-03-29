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
	// return mysolution3(nums);
	return solution2(nums);
};
// 删+加零
var solution1 = function (nums) {
	let len = nums.length;
	let j = 0;
	while (len--) {
		if (nums[j] === 0) {
			nums.splice(j, 1);
			nums.push(0);
		} else {
			j++;
		}
	}
};

var solution2 = function (nums) {
	const len = nums.length;
	let j = 0;
	for (let i = 0; i < len; i++) {
		if (nums[i] !== 0) {
			[nums[i], nums[j++]] = [nums[j], nums[i]];
		}
	}
};

// 非零往前挪，挪完后面全为零
// i负责遍历数组，j负责指向下一个非零元素
var solu2 = function (nums) {
	const len = nums.length;
	let j = 0;
	for (let i = 0; i < len; i++) {
		if (nums[i] !== 0) {
			nums[j] = nums[i];
			if (i !== j) {
				nums[i] = 0;
			}
			j++;
		}
	}
};

// 93.21 15.55
var mySolution = function (nums) {
	const len = nums.length;
	let countZero = 0;
	nums.forEach((num) => {
		if (num === 0) countZero++;
	});
	const countNotZero = len - countZero;
	let pos = 0;
	for (let i = 0; i < len; i++) {
		if (nums[i] !== 0) {
			nums[pos++] = nums[i];
		}
		if (pos >= countNotZero) {
			while (pos < len) {
				nums[pos++] = 0;
			}
			break;
		}
	}
	return nums;
};
// @lc code=end
