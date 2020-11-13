/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    return solution1(root);
};

var solution1 = function(root){
    if (!root) return [];

    const queue = [], res = [];
    queue.push(root);
    while (queue.length){
        let len = queue.length, max = queue[0].val;
        while (len--){
            let curr = queue.shift();
            max = Math.max(curr.val, max);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        res.push(max);
    }
    return res;
}
// @lc code=end

