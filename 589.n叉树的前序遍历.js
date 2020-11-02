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
    return mysolution2(root);
};

// 递归
var mysolution1 = function(root){
    let res = [];
    if (!root) return res;

    const pre = (root) => {
        if (!root) return;
        res.push(root.val);
        root.children.forEach(child => {
            pre(child);
        })
    }
    pre(root);
    return res;
}

// BFS
var mysolution2 = function(root){
    let res = [];
    if (!root) return res;

    let stack = [];
    stack.push(root);
    while (stack.length){
        let curr = stack.pop();
        res.push(curr.val);
        let len = curr.children.length;
        while (len--){
            stack.push(curr.children[len]);
        }
    }
    return res;
}
// @lc code=end

