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
    return solution3(height);
};

// 动态规划
var mysolution1 = function(height){
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
// 暴力
var solution1 = function(height){
    let res = 0;
    const len = height.length;
    for (let i = 0; i < len; i++){
        if (i === 0 || i === len - 1) continue;

        let l = i - 1, r = i + 1, lmax = rmax = curr = height[i];
        // 找左右边界
        while (l >= 0){
            if (height[l] > lmax){
                lmax = height[l];
            }
            l--;
        }
        while (r <= len - 1){
            if (height[r] > rmax){
                rmax = height[r];
            }
            r++;
        }
        res += Math.min(lmax, rmax) - curr;
    }
    return res;
}

var peek = function(stack){
    const len = stack.length;
    return stack[len - 1];
}

var solution3 = function(height){
    let stack = [], ans = 0;
    const len = height.length;
    for (let i = 0; i < len; i++){
        // 如果栈不为空并且 栈顶小于当前元素
        while (stack.length && height[peek(stack)] < height[i]){
            let curr = stack.pop(); //是底边的高度
            // 弹出等高的元素
            while (stack.length && height[peek(stack)] === height[curr]){
                stack.pop();
            }
            // 如果此时栈不为空，说明有左边界，计算当前接雨水的量，按照行计算
            // 左边界为栈顶第，右边界为当前元素i
            if (stack.length){
                let top = peek(stack);
                let h = Math.min(height[top], height[i]);
                let w = i - top - 1;
                ans += (h - height[curr]) * w;
            }
        }
        stack.push(i);
    }
    return ans;
}
// @lc code=end

