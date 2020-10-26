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
    return mysolution2(height);
};

var mysolution1 = function (height){
    // two loop
    const len = height.length;
    let max = 0;
    for (let i = 0; i < len - 1; i++){
        for (let j = i + 1; j < len; j++){
            let area = (j - i) * Math.min(height[i], height[j]);
            max = Math.max(max, area);
        }
    }
    return max;
}

var mysolution2 = function (height){
    // 夹逼
    const len = height.length;
    let left = 0, right = len - 1;
    let max = 0, minHeight, area;
    while (left < right){
        minHeight = height[left] < height[right] ? height[left++] : height[right--];
        area = minHeight * (right - left + 1);
        max = Math.max(area, max);
    }
    return max;
}
// @lc code=end

