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
var twoSum = function(nums, target) {
    return solution2(nums, target);
};

// 暴力 
var solution1 = function(nums, target){
    const len = nums.length;
    for (let i = 0; i < len - 1; i++){
        for (let j = i + 1; j < len; j++){
            let other = target - nums[i];
            if (other === nums[j]){
                return [i, j];
            }
        }
    }
}

var solution2 = function(nums, target){
    const len = nums.length;
    let hash = {};
    for (let i = 0; i < len; i++){
        let other = target - nums[i];
        if (other in hash){
            return [hash[other], i];
        }
        hash[nums[i]] = i;
    }
}

var solution3 = function(nums, target){
    const len = nums.length;
    for (let i = len; i >= 0; i--){
        const index = nums.indexOf(target - nums[i]);
        if (index !== -1 && index !== i){
            return [index, i];
        }
    }
}
// @lc code=end

