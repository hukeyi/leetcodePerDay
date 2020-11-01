/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

};

// 1. 哈希表：遍历一次记录出现频率
// 2. 单调双端队列：遍历哈希表，找到前k个高频元素
// o(n+m)
var solution1 = function(nums , k){
    let hash = {}, deque = [];
    const len = nums.length;
    // hash table
    for (let i = 0; i < len; i++){
        hash[nums[i]] = (nums[i] in hash) ? hash[nums[i]] + 1 : 1;
    }
    // 
    for (let [val, key] in hash){

    }
}
// @lc code=end

