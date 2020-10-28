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
// var twoSum = function(nums, target) {
//     
// };

var twoSum = function(nums, target) {
    // return mySolution(nums, target);
    return solution3(nums, target);
};

// 暴力
// 2 loop
var solution1 = function(nums, target){
    const len = nums.length;
    for (let i = 0; i < len - 1; i++){
        const other = target - nums[i];
        for (let j = i + 1; j < len; j++){
            if (nums[j] === other){
                return [i, j];
            }
        }
    }
}

// hash
// 1 loop 
var solution2 = function(nums, target){
    const len = nums.length;
    let hash = {}; // key- nums[i], val-i
    for (let i = 0; i < len; i++){
        const other = target - nums[i];
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

