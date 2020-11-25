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
    return solution2 (matrix, target);
};

// start from the right corner
var solution1 = function(matrix, target){
    if (!matrix.length) return false;
    const [rows, cols] = [matrix.length, matrix[0].length];
    for (let i = 0; i < rows; i++){
        for (let j = cols - 1; j >= 0; j--){
            if (matrix[i][j] === target) return true;
            else if (matrix[i][j] > target) continue;
            else break;
        }
    }
    return false;
}

// binary search
// treat the whole 2d matrix as a 1d array
var solution2 = function(matrix, target){
    if (!matrix.length) return false;
    const [rows, cols] = [matrix.length, matrix[0].length];
    let [left, right] = [0, rows * cols - 1];
    while (left <= right){
        const mid = left + Math.floor((right - left) / 2);
        const tmp = matrix[Math.floor(mid / cols)][mid % cols];
        if (target === tmp) return true;
        else if (target > tmp) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}
// @lc code=end

