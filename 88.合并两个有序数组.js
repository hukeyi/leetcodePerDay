/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    mysolution1(nums1, m, nums2, n);
};

var mysolution1 = function(nums1, m, nums2, n){
    let p1 = m - 1, p2 = n - 1, p = m + n - 1;
    while (p2 >= 0){
        if (p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[p--] = nums1[p1--];
        }else{
            nums1[p--] = nums2[p2--];
        }
    }
}
// @lc code=end

