/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return solution1(root, p, q);
};

var solution1 = function(root, p, q){
    if (!root || root === p || root === q){
        return root;
    }
    let left = solution1(root.left, p, q);
    let right = solution1(root.right, p, q);
    // left not existed -> right or left and right not existed -> null
    if (!left) return right;
    // right not existed and left existed -> left
    if (!right) return left;
    // left and right existed -> they're at different subtree of root,
    // so root is the common ancester of left and right
    return root;
}
// @lc code=end

