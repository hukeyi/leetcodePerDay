/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    return solution2(heights);
};

// 暴力解法: 6572ms
var solution1 = function(heights){
    const len = heights.length;
    if (len === 0) return 0;
    if (len === 1) return heights[0];

    let max = 0;
    for (let i = 0; i < len; i++){
        let left = right = i;
        while (left >= 0 && heights[i] <= heights[left - 1]){
            left--;
        }
        while (right < len - 1 && heights[i] <= heights[right + 1]){
            right++;
        }
        let imax = heights[i] * (right - left + 1);
        max = Math.max(max, imax);
    }
    return max;
}

var solution2 = function(heights){
    let max = 0;
    let stack = [];
    heights.unshift(0);
    heights.push(0);
    const len = heights.length;
    for (let i = 0; i < len; i++){
        while (stack.length !== 0 && heights[stack[stack.length - 1]] > heights[i]){
            let curr = stack.pop();
            let left = stack[stack.length - 1] + 1;
            let right = i - 1;
            max = Math.max(max, (right - left + 1) * heights[curr]);
        }
        stack.push(i);
    }
    return max;
}
// @lc code=end

