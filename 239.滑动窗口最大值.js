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
var maxSlidingWindow = function(nums, k) {
    return solution2(nums, k);
};

// 暴力
var solution1 = function(nums, k){
    const len = nums.length;
    const res = [];
    for (let i = 0; i < len - k + 1; i++){
        let window = nums.slice(i, i + k);
        res.push(Math.max(...window));
    }
    return res;
}

var back = function(queue){
    const len = queue.length;
    return queue[len - 1];
}

// 双端队列
// 队列内保证为队头最大值的递增
// 新元素比队尾大，队尾出队直到队空或者队尾比新元素大，新元素入队
var solution2 = function(nums, k){
    const deque = [], res = [];
    const len = nums.length;
    for (let i = 0; i < len; i++){
        while (deque.length && nums[back(deque)] <= nums[i]){
            deque.pop();
        }
        deque.push(i);
        // 如果窗口满了
        // 注意：这里必须用下标检查window，不能用deque的长度检查
        if (i - deque[0] + 1 > k){
            deque.shift();
        }
        if (i + 1 >= k){
            res.push(nums[deque[0]]);
        }
    }
    return res;
}
// @lc code=end

