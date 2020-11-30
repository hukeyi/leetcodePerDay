/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    return mysolution1(root);
};

var mysolution2 = function(root){
    if (!root) return [];
    const res = [];
    const pre = function(root){
        if (!root) return [];
        res.push(root.val);
        root.children.forEach(child => {
            pre(child);
        })
    }
    pre(root);
    return res;
}

var mysolution1 = function(root){
    if (!root) return [];
    const res = [], queue = [root];
    while (queue.length){
        let curr = queue.shift();
        res.push(curr.val);
        queue.unshift(...curr.children);
    }
    return res;
}
// @lc code=end

