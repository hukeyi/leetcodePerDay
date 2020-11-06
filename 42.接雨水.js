/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    return mysolution2(height);
};

// 暴力 280ms
var mysolution1 = function(height){
    const len = height.length;
    let res = 0;
    for (let i = 0; i < len - 1; i++){
        if (i === 0) continue;
        // 找左右边界
        let left = i - 1, right = i + 1, lmax = rmax = height[i];
        while (left >= 0){
            lmax = Math.max(lmax, height[left--]);
        }
        while (right <= len - 1){
            rmax = Math.max(rmax, height[right++]);
        }
        res += Math.min(lmax, rmax) - height[i];
    }
    return res;
}

var peek = function(stack){
    const len = stack.length;
    return stack[len - 1];
}

// 单调栈
var mysolution2 = function(height){
    let res = 0, stack = [];
    const len = height.length;
    for (let i = 0; i < len; i++){
        // 可以直接计算雨水量
        while (stack.length && height[peek(stack)] < height[i]){
            let curr = stack.pop();
            // reduce repeat
            while (stack.length && height[peek(stack)] === height[curr]){
                stack.pop();
            }
            if (stack.length){
                let w = i - peek(stack) - 1;
                let h = Math.min(height[i], height[peek(stack)]) - height[curr];
                res += w * h;
            }
        }
        // push
        stack.push(i);
    }
    return res;
}

// 动态规划
var solution2 = function(height){
    let left = 0, right = height.length - 1;
    let res = 0;
    let leftMax = 0, rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                res += (leftMax - height[left]);
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                res += (rightMax - height[right]);
            }
            right--;
        }
    }
    return res;
}
// @lc code=end

