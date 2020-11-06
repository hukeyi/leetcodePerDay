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

// 回溯
var mysolution2 = function(nums){
    let res = [], ans = [];
    dfs(nums, 0, ans, res);
    return res;
}

var dfs = function(nums, index, ans, res){
    // terminator
    if (index === nums.length){
        res.push(ans.slice()); //注意是ans的拷贝，不能直接pushans
        return;
    }
    // current logic: +index : no index
    // drill down
    dfs(nums, index + 1, ans, res);
    ans.push(nums[index]);
    dfs(nums, index + 1, ans, res);
    
    // restate
    ans.pop();
}
// @lc code=end

