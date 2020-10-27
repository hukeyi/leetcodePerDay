/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    return mysolution2(nums);
};

var mysolution1 = function(nums){
    const len = nums.length;
    nums.sort((a, b) => {return a - b;});
    let res = [];
    for (let k = 0; k < len - 2; k++){
        if (k === 0 || nums[k] !== nums[k - 1]){
            for (let i = k + 1; i < len - 1; i++){
                if (i === k + 1 || nums[i] !== nums[i - 1]){
                    for (let j = i + 1; j < len; j++){
                        if (j === i + 1 || nums[j] !== nums[j - 1]){
                            if (nums[i] + nums[j] + nums[k] === 0){
                                res.push([nums[k], nums[i], nums[j]]);
                            }
                        }
                    }
                }
            }
        }
    }
    return res;
}

// o(n^2)
var solution2 = function(nums){
    // 对有序数组操作
    nums.sort((a, b) => {return a - b;});
    const len = nums.length;
    let res = [];
    for (let k = 0; k < len - 2; k++){
        if (nums[k] > 0) break; // 最小的数都大于0了，sum一定大于0，直接退出
        if (k > 0 && nums[k] === nums[k - 1]) continue; // 遍历到相同的数，直接下一个

        let i = k + 1, j = len - 1, sum = 0;
        while (i < j){ //直到左右边界相撞
            sum = nums[k] + nums[i] + nums[j];
            if (sum < 0){ //和小于0，则移动左边界
                while (i < j && nums[i] === nums[++i]);
            }else if (sum > 0){ //和大于0，移动右边界
                while (i < j && nums[j] === nums[--j]);
            }else{ //等于0，加入res，并且跳过重复的数
                res.push([nums[k], nums[i], nums[j]]);
                while (i < j && nums[i] === nums[++i]);
                while (i < j && nums[j] === nums[--j]);
            }
        }
    }
    return res;
}
// @lc code=end

