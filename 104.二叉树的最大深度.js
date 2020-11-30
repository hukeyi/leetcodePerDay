/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归
// var maxDepth = function (root){
//     if (!root) return 0;
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// }

// recursion
// var maxDepth = function(root){
//     if (!root) return 0;
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// }

var maxDepth = function(root){
    if (!root) return 0;

    const queue = [root];
    let ans = 0;
    while (queue.length){
        let num = queue.length;
        while (num--){
            let curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        ans++;
    }
    return ans;
}
// @lc code=end

