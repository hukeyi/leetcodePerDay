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
var mysolution1 = function (nums, k){
    const len = nums.length;
    let res = [];
    for (let i = 0; i < len - k + 1; i++){
        let window = nums.slice(i, i + k);
        res.push(Math.max(...window))
    }
    return res;
}

// 双端队列，队列内下标由小到大递减
// 窗口左边界和右边界各用一个变量
var mysolution2 = function(nums, k){
    const len = nums.length;
    // if (len <= k) return [Math.max(...nums)];
    if(len < 2) return nums;

    let deque = [], res = [];
    for (let i = 0; i < len; i++){
        // 栈不为空且队尾元素比新元素小时，弹出队尾元素
        // 直到队尾元素比新元素大或者栈空
        while (deque.length !== 0 && nums[deque[deque.length - 1]] <= nums[i]){
            deque.pop();
        }
        deque.push(i);

        // 假设队首元素的下标为j
        // 则队首和当前元素之间的宽度为i - j
        // 这个宽度i-j应该小于k；当等于k时，队首就不在窗口范围内了
        // e.g. k=3, j=0+i=3, i-j=3=k -> 0 1 2 3 此时j已经滑到窗口之外
        if (i - deque[0] >= k){ // 如果队首元素不在窗口内，则弹出
            deque.shift();
        }
        //当i+1>=k，此时已经形成窗口，就可以push结果了，每移动一次都会有一个最大值
        if (i + 1 >= k){
            res.push(nums[deque[0]]);
        }
    }
    return res;
}
// @lc code=end

