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
    // return solution1(heights);
    return solution2(heights);
};

// 暴力解法
// 固定一个柱子，从柱子开始向左右散开，直到碰到比柱子矮的就停止
var solution1 = function(heights){
    const len = heights.length;
    let max = 0;
    for (let i = 0; i < len; i++){
        let curr = heights[i];
        let left = i - 1, right = i + 1;
        while (left >= 0 && heights[left] >= curr){
            left--;
        }
        while (right <= len - 1 && heights[right] >= curr){
            right++;
        }
        max = Math.max(max, (right - left - 1) * curr);
    }
    return max;
}

// 单调栈，单调递增
var mysolution2 = function(heights){
    let max = 0;
    let stack = [];
    heights.unshift(0); //避免溢出，处理heights[0]的左边界
    heights.push(0); //处理heights[len-1]的右边界
    const len = heights.length;
    for (let i = 0; i < len; i++){
        // 当栈顶元素比新元素大，则说明栈顶元素的左右边界可以确定了，则它的最大面积也可以确定了
        while (stack.length !== 0 && heights[stack[stack.length-1]] > heights[i]){
            // 栈顶元素弹出，计算其最大面积
            let curr = stack.pop();
            // 左边界是栈顶元素的下一个元素(假设为k）的后一位
            // （因为k是左边第一个比curr小的，最后一个比curr大的下标要加一）
            let left = stack[stack.length - 1] + 1;
            // 右边界就是新元素（假设下标是j）的前一位
            // （因为j是右边第一个比curr小的，所以得到最后一个比curr大的下标要减一）
            let right = i - 1;
            let imax = (right - left + 1) * heights[curr];
            max = Math.max(max, imax);
        }
        stack.push(i);
    }
    return max;
}
// @lc code=end

