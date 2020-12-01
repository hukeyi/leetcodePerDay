/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

const { RSA_NO_PADDING } = require("constants");

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    return solution1(root);
};

var solution1 = function(root){
    if (!root) return [];
    const queue = [root], res = [];
    while (queue.length){
        const ans = [];
        let num = queue.length;
        while (num--){
            const curr = queue.shift();
            ans.push(curr.val);
            queue.push(...curr.children);
        }
        if (ans.length) res.push(ans);
    }
    return res;
}
// @lc code=end

