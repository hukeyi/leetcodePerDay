/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    return mysolution2(matrix, target);
};

// right corner
var mysolution1 = function(matrix, target){
    if (!matrix.length) return false;
    const rows = matrix.length, cols = matrix[0].length;
    for (let i = 0; i < rows; i++){
        for (let j = cols - 1; j >= 0; j--){
            if (matrix[i][j] === target) return true;
            else if (matrix[i][j] < target) break;
            else continue;
        }
    }
    return false;
}

// binary search
var mysolution2 = function(matrix, target){
    if (!matrix.length) return false;
    const rows = matrix.length, cols = matrix[0].length;
    let left = 0, right = rows * cols - 1;
    while (left <= right){
        const mid = left + Math.floor((right - left) / 2);
        const tmp = matrix[Math.floor(mid / cols)][mid % cols];
        if (tmp === target) return true;
        else if (tmp < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}
// @lc code=end

