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

var solution1 = function(heights){
    const len = heights.length;
    let max = 0;
    for (let i = 0; i < len; i++){
        let left = i - 1, right = i + 1;
        while (left >= 0 && heights[left] >= heights[i]){
            left--;
        }
        while (right <= len - 1 && heights[right] >= heights[i]){
            right++;
        }
        let width = right - left - 1;
        max = Math.max(max, width * heights[i]);
    }
    return max;
}

var peek = function(stack){
    const len = stack.length;
    return stack[len - 1];
}

var solution2 = function(heights){
    let stack = [], max = 0;
    heights.unshift(0); heights.push(0);
    const len = heights.length;
    for (let i = 0; i < len; i++){
        while (stack.length && heights[peek(stack)] > heights[i]){
            let curr = stack.pop(); // min height;
            let left = peek(stack) + 1; // left bound
            let right = i - 1;
            let width = right - left + 1;
            max = Math.max(max, width * heights[curr]);
        }
        stack.push(i);
    }
    return max;
}
// @lc code=end

