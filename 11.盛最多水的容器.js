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

var solution1 = function(height){
    let max = 0;
    const len = height.length;
    for (let i = 0; i < len; i++){
        for (let j = i + 1; j < len; j++){
            const ans = (j - i) * Math.min(height[i], height[j]);
            max = ans > max ? ans : max;
        }
    }
    return max;
}

var solution2 = function (height){
    let max = 0, minHeight, area;
    const len = height.length;
    for (let i = 0, j = len - 1; i < j; ){
        minHeight = height[i] < height[j] ? height[i++] : height[j--];
        area = (j - i + 1) * minHeight;
        max = Math.max(max, area);
    }
    return max;
}
// @lc code=end

