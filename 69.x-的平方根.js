/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return solution2(x);
};
// binary search
var solution1 = function(x){
    if (x === 0 || x === 1) return x;

    let [left, right] = [1, x];
    // terminator condition: [right + 1, right],
    // so, should return right instead of left
    while (left <= right){
        const mid = left + Math.floor((right - left) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid < x) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}

// newton
var solution2 = function(x){
    if (x === 0 || x === 1) return x;

    let curr = 1;
    while (true){
        let pre = curr;
        curr = (curr + x / curr) / 2;
        if (Math.abs(curr - pre) < 1e-6){
            return Math.trunc(curr);
        }
    }
}
// @lc code=end

