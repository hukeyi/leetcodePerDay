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
    return mysolution1(root);
};

var mysolution1 = function(root){
    if (!root) return [];

    let res = [], queue = [];
    queue.push(root);
    while (queue.length){
        let ans = [];
        let num = queue.length;
        while (num--){
            let curr = queue.shift();
            ans.push(curr.val);
            queue = queue.concat(curr.children);
        }
        if (ans.length) res.push(ans);
    }
    return res;
}
// @lc code=end

