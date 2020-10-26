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
    return mySolution(nums1, nums2);
};

// 无序，o(max(nlogn, mlogm, n+m))
// 有序，o(n+m)
var sortSolution = function (nums1, nums2){
    nums1.sort((a, b) => {return a - b;});
    nums2.sort((a, b) => {return a - b;}); 
    const len1 = nums1.length, len2 = nums2.length;
    let p1 = p2 = 0;
    let res = [];

    while (p1 < len1 && p2 < len2){
        if (nums1[p1] < nums2[p2]){
            p1++;
        }else if (nums1[p1] > nums2[p2]){
            p2++;
        }else{
            res.push(nums1[p1]);
            p1++;
            p2++;
        }
    }
    return res;
}

// 99.64 o(n + m)
var mySolution = function (nums1, nums2){
    // 优化：遍历较短短数组
    const len1 = nums1.length, len2 = nums2.length;
    if (len1 > len2){
        return mySolution(nums2, nums1);
    }
    let res = [];
    let hash = {};
    for (let i = 0; i < len1; i++){
        if (nums1[i] in hash){
            hash[nums1[i]]++;
        }else{
            hash[nums1[i]] = 1;
        }
    }
    for (let j = 0; j < len2; j++){
        if (nums2[j] in hash && hash[nums2[j]] > 0){
            res.push(nums2[j]);
            hash[nums2[j]]--;
        }
    }
    return res;
}
// @lc code=end

