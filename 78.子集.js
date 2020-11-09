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

var solution1 = function(nums){
    let res = [[]];

    for (let num of nums){
        const len = res.length;
        for (let i = 0; i < len; i++){
            let newSet = res[i].concat([num]);
            res.push(newSet);
        }
    }
    return res;
}

var solution2 = function(nums){
    const res = [], ans = [];
    const dfs = function (nums, index, ans, res){
        if (index === nums.length){
            res.push(ans.slice());
            return;
        }
        dfs(nums, index + 1, ans, res);
        ans.push(nums[index]);
        dfs(nums, index + 1, ans, res);

        ans.pop();
    }
    dfs(nums, 0, ans, res);
    return res;
}
// @lc code=end

