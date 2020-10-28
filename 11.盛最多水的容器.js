/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    return solution2(height);
};

// 暴力，2 loop，find max
var solution1 = function(height){
    const len = height.length;
    let max = 0;
    for (let i = 0; i < len - 1; i++){
        for (let j = i + 1; j < len; j++){
            const minHeight = Math.min(height[i], height[j]);
            let area = (j - i) * minHeight;
            max = Math.max(area, max);
        }
    }
    return max;
}

// 夹逼，左右边界收敛
// 左右边界中，较小的那个往中间收敛，直到相撞
var solution2 = function(height){
    const len = height.length;
    let left = 0, right = len - 1;
    let max = 0;
    while (left < right){
        let minHeight = height[left] < height[right] ? height[left++] : height[right--];
        let area = (right - left + 1) * minHeight;
        max = Math.max(area, max);
    }
    return max;
}
// @lc code=end

