/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return majorityElementRec(nums, 0, nums.length - 1);
};

// hash o(n)
var solution1 = function(nums){
    const len = nums.length, bound = Math.floor(len / 2);;
    let hash = {};
    for (let i = 0; i < len; i++){
        hash[nums[i]] = nums[i] in hash ? hash[nums[i]] + 1 : 1;
        if (hash[nums[i]] > bound){
            return nums[i];
        }
    }
}

// sort o(nlogn)
var solution2 = function(nums){
    nums.sort((a, b) => { return a - b; });
    return nums[Math.floor(nums.length / 2)];
}

var countInRange = function(nums, num, lo, hi){
    let count = 0;
    for (let i = 0; i <= hi; i++){
        if (nums[i] === num){
            count++;
        }
    }
    return count;
}

var majorityElementRec = function(nums, lo, hi){
    if (lo === hi){
        return nums[lo];
    }

    let mid = Math.floor((hi - lo) / 2) + lo;
    let left = majorityElementRec(nums, lo, mid);
    let right = majorityElementRec(nums, mid + 1, hi);

    if (left === right) return left;

    let leftCount = countInRange(nums, left, lo, hi);
    let rightCount = countInRange(nums, right, lo, hi);

    return leftCount > rightCount ? left : right;
}
// @lc code=end

