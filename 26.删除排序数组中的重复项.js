/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    return mysolution1(nums);
};

var mysolution1 = function(nums){
    const len = nums.length;
    let j = 0;
    for (let i = 0; i < len; i++){
        if (nums[i] !== nums[j]){
            nums[++j] = nums[i];
        }
    }
    return j + 1;
}

// 空间复杂度不符合题目要求
var mySolution = function(nums){
    let map = [];
    for (let i = 0; i < nums.length; i++){
        if (map.indexOf(nums[i]) === -1){
            map.push(nums[i]);
        }else{
            nums.splice(i--, 1);
        }
    }
    return nums.length;
}
// @lc code=end

