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
    //return mySolution(nums, target);
    return solution1(nums, target);
};

var mySolution = function (nums, target){
    let len = nums.length;
    let res = [];
    for (let i = 0; i < len; i++){
        let t2 = nums.indexOf(target - nums[i]);
        if (t2 !== -1 && t2 !== i){
            res[0] = i;
            res[1] = t2;
            break;
        }
    }
    return res;
}

var solution1 = function(nums, target){
    const len = nums.length;
    let map = {}; //key: 数值 val：nums里的下标
    for (let i = 0; i < len; i++){
        let anotherNum = target - nums[i];
        if (anotherNum in map){ //往前找，而不是往后找
            // 这样就可以不用判断索引是否重复了
            return [map[anotherNum], i];
        }
        map[nums[i]] = i;
    }
}
// @lc code=end

