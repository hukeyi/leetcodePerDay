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
//     let len = nums.length;
//     let res = [];
//     for (let i = 0; i < len; i++){
//         let t2 = nums.indexOf(target - nums[i]);
//         if (t2 !== -1 && t2 !== i){
//             res[0] = i;
//             res[1] = t2;
//             break;
//         }
//     }
//     return res;
// };
// beats 93.23%
var twoSum = function(nums, target) {
    const map = {};
    const len = nums.length;
    for (let i = 0; i < len; i++){
        const t2 = target - nums[i];
        if (t2 in map){
            return [map[t2], i];
        }
        map[nums[i]] = i;
    }
}
// @lc code=end

