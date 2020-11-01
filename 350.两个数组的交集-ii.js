/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // return sortSolution(nums1, nums2);
    return solution2(nums1, nums2);
};

var solution1 = function (nums1, nums2){
    const len1 = nums1.length, len2 = nums2.length;
    if (len1 > len2){
        return solution1(nums2, nums1);
    }
    let hash = {}, res = [];
    for (let i = 0; i < len1; i++){
        hash[nums1[i]] = nums1[i] in hash ? hash[nums1[i]] + 1 : 1;
    }
    for (let j = 0; j < len2; j++){
        if (nums2[j] in hash && hash[nums2[j]] > 0){
            hash[nums2[j]]--;
            res.push(nums2[j]);
        }
    }
    return res;
}

var solution2 = function(nums1, nums2){
    nums1.sort((a, b) => { return a - b; });
    nums2.sort((a, b) => { return a - b; });
    const len1 = nums1.length, len2 = nums2.length;
    let p1 = p2 = 0;
    let res = [];
    while (p1 < len1 && p2 < len2){
        if (nums1[p1] < nums2[p2]){
            p1++;
        }else if (nums1[p1] > nums2[p2]){
            p2++;
        }else{
            res.push(nums1[p1++]);
            p2++;
        }
    }
    return res;
}
// @lc code=end

