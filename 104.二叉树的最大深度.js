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
// var maxDepth = function (root) {
//     if (!root) return 0;
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// }

// 迭代：BFS 队列
var maxDepth = function(root){
    if (!root) return 0;

    let queue = [];
    queue.push(root);
    let res = 0;
    while (queue.length){
        let size = queue.length;
        while (size--){ //一整层
            let curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        res++;
    }
    return res;
}
// @lc code=end

