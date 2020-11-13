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
    return mysolution2(nums);
};

var mysolution1 = function(nums){
    const res = [[]];
    for (let num of nums){
        let len = res.length;
        for (let i = 0; i < len; i++){
            let newset = res[i].slice();
            newset.push(num);
            res.push(newset);
        }
    }
    return res;
}

// dfs
var mysolution2 = function(nums){
    const res = [], ans = [];
    const dfs = function(nums, ans, res, index){
        if (index === nums.length){
            res.push(ans.slice());
            return ;
        }

        // current logic and drill down
        dfs(nums, ans, res, index + 1);
        ans.push(nums[index]);
        dfs(nums, ans, res, index + 1);
        // restate
        ans.pop();
    }
    dfs(nums, ans, res, 0);
    return res;
}
// @lc code=end

