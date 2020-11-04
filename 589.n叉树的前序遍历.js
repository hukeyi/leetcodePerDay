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
    return solution2(root);
};

var solution1 = function (root){
    if (!root) return [];

    let res = [];
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

var solution2 = function (root){
    if (!root) return [];

    let res = [], stack = [];
    stack.push(root);
    while (stack.length){
        let curr = stack.pop();
        res.push(curr.val);
        let num = curr.children.length;
        while (num--){
            stack.push(curr.children[num]);
        }
    }
    return res;
}
// @lc code=end

