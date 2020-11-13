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
    return solution2(nums);
};

// hash
var solution1 = function(nums){
    const hash = {}, len = nums.length, bound = Math.floor(len / 2);
    for (let i = 0; i < len; i++){
        hash[nums[i]] = nums[i] in hash ? hash[nums[i]] + 1 : 1;
        if (hash[nums[i]] > bound) return nums[i];
    }
}

// sort and find the mid number
var solution2 = function(nums){
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}

// 摩尔投票法 o(n)
var mysolution3 = function(nums){
    const len = nums.length;
    let count = 1, candidate = nums[0];
    for (let i = 1; i < len; i++){
        nums[i] === candidate ? count++ : count--;
        if (count === 0){
            candidate = nums[++i];
            count++;
        }
    }
    return candidate;
}

var countNums = function(nums, target, lbound, rbound){
    let count = 0;
    for (let i = lbound; i <= rbound; i++){
        if (nums[i] === target){
            count++;
        }
    }
    return count;
}

var majorityRec = function(nums, lbound, rbound){
    if (lbound === rbound){
        return nums[lbound];
    }

    let mid = Math.floor((rbound - lbound) / 2) + lbound;
    let left = majorityRec(nums, lbound, mid);
    let right = majorityRec(nums, mid + 1, rbound);

    // left most num equals to rihgt most, return
    if (left === right) return left;

    // not equal, count the number and compare, return the bigger one
    let leftcount = countNums(nums, left, lbound, rbound);
    let rightcount = countNums(nums, right, lbound, rbound);
    return leftcount > rightcount ? left : right;
}
// @lc code=end

