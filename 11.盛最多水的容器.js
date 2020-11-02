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

var solution1 = function (height){
    const len = height.length;
    let max = 0;
    for (let i = 0; i < len - 1; i++){
        for (let j = 0; j < len; j++){
            let area = (j - i) * Math.min(height[i], height[j]);
            max = Math.max(area, max);
        }
    }
    return max;
}

var solution2 = function(height){
    const len = height.length;
    let max = 0, i = 0, j = len - 1;
    while (i < j){
        let minHeight = height[i] < height[j] ? height[i++] : height[j--];
        let area = (j - i + 1) * minHeight;
        max = Math.max(area, max);
    }
    return max;
}
// @lc code=end

