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
    return solution1 (matrix, target);
};

// 从右上角开始搜索
var solution1 = function(matrix, target){
    if (!matrix.length) return false;

    const row = matrix.length, col = matrix[0].length;
    for (let i = 0; i < row; i++){
        for (let j = col - 1; j >= 0; j--){
            let tmp = matrix[i][j];
            if (tmp === target) return true;
            else if (tmp > target) continue;
            else break;
        }
    }
    return false;
}

// binary search
var solution2 = function(matrix, target){
    if (!matrix.length) return false;
    const row = matrix.length, col = matrix[0].length, len = row * col;
    let left = 0, right = len - 1;
    while (left <= right){
        const mid = Math.floor((left + right) / 2);
        const i = Math.floor(mid / col), j = mid % col, tmp = matrix[i][j];
        if (tmp === target) return true;
        else if (tmp > target) right = mid - 1;
        else left = mid + 1;
    }
    return false;
}
// @lc code=end

