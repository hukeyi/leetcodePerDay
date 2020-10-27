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
    return mySolution(nums);
};

// 快慢指针 i-fast j-slow
var mysolution = function (nums){
    let j = 0;
    for (let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[j]){
            nums[++j] = nums[i];
        }
    }
    return j + 1;
}

// 99.21
var solution1 = function(nums){
    let j = 0; //指向当前不重复数组的最后一个元素
    for (let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[i - 1]){
        // if (nums[i] !== nums[j]){ // 这样更快
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

