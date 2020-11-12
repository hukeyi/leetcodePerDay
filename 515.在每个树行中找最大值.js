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
        let num = queue.length;
        let ans = queue[0].val;
        while (num--){
            let curr = queue.shift();
            ans = curr.val > ans ? curr.val : ans;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        res.push(ans);
    }
    return res;
}
// @lc code=end

