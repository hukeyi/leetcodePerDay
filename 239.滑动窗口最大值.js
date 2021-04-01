/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	return solu1(nums, k);
};

// violence
var mysolution1 = function (nums, k) {
	const len = nums.length;
	const res = [];
	for (let i = 0; i < len - k + 1; i++) {
		let window = nums.slice(i, i + k);
		res.push(Math.max(...window));
	}
	return res;
};

var back = function (queue) {
	const len = queue.length;
	return queue[len - 1];
};

// deque
// 队头为最大值，保证队列内从头到尾单调递减。
// 如果新元素大于队尾，则队尾出列，直到队尾大于新元素，新元素再入队；
// 当i到达了第一个窗口的尾部，就开始push res
var solution1 = function (nums, k) {
	const len = nums.length;
	const deque = [],
		res = [];
	for (let i = 0; i < len; i++) {
		// 当队列不为空且队尾元素小于新元素，队尾出队
		while (deque.length && nums[back(deque)] < nums[i]) {
			deque.pop();
		}
		deque.push(i);
		// 当队列满了（即已经有k个元素），队头出列
		if (i - deque[0] + 1 > k) deque.shift();
		// 当已经滑到新窗口，push结果
		if (i + 1 >= k) res.push(nums[deque[0]]);
	}
	return res;
};
// @lc code=end
