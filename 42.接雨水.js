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

// directly calculate
// fix one stick, just focus on this stick
var mysolution1 = function(height){
    const len = height.length;
    let res = 0;
    for (let i = 1; i < len - 1; i++){
        let left = i - 1, right = i + 1, lmax = rmax = height[i];
        while (left >= 0){
            lmax = Math.max(lmax, height[left--]);
        }
        while (right <= len - 1){
            rmax = Math.max(rmax, height[right++]);
        }
        let minHeight = Math.min(lmax, rmax);
        if (minHeight > height[i]) res += minHeight - height[i];
    }
    return res;
}

// single stack
var peek = function(stack){
    const len = stack.length;
    return stack[len - 1];
}

var mysolution2 = function(height){
    const len = height.length, stack = [];
    let res = 0;
    for (let i = 0; i < len; i++){
        // its the time to calculate the area
        // when the new elem is bigger than the top of the stack
        while (stack.length && height[i] > height[peek(stack)]){
            let curr = stack.pop(); // the floor
            // reduce repeat elem
            while (stack.length && height[peek(stack)] === height[curr]){
                stack.pop();
            }
            // if there's left bound existed, then calculate the area
            if (stack.length){
                let w = i - peek(stack) - 1;
                let h = Math.min(height[peek(stack)], height[i]) - height[curr];
                res += w * h;
            }
        }
        // not the time
        stack.push(i);
    }
    return res;
}

// 动态规划
var solution3 = function(height){
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

