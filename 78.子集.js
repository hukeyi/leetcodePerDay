/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    return solution2(nums);
};

var solution2 = function(nums){
    let res = [[]];

    for (let num of nums){
        const len = res.length;
        for(let i = 0; i < len; i++){
            let newset = res[i].concat([num]);
            res.push(newset);
        }
    }
    return res;
}

// 回溯
var solution1 = function (nums){
    let res = [], list = [];
    dfs(nums, list, res, 0);
    return res;
}

var dfs = function(nums, list, res, index){
    if (index === nums.length){
        res.push(list.slice());
        return;
    }

    // current logic
    dfs(nums, list, res, index + 1);
    
    list.push(nums[index]);
    dfs(nums, list, res, index + 1);

    // restore
    list.pop();
}
// @lc code=end

