/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    return mysolution2(root);
};

// bfs
var mysolution1 = function(root){
    if (!root) return [];

    const queue = [], res = [];
    queue.push(root);
    while (queue.length){
        let num = queue.length;
        const ans = [];
        while (num--){
            let curr = queue.shift();
            ans.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        if (ans.length) res.push(ans);
    }
    return res;
}

// dfs recursive
var mysolution2 = function(root){
    const res = [];
    let level = 0;
    const recur = function (root, level, res){
        // terminator
        if (!root) return;

        // current logic
        if (res[level] === undefined) res[level] = [];
        res[level].push(root.val);
        // drill down
        if (root.left) recur(root.left, level + 1, res);
        if (root.right) recur(root.right, level + 1, res);
    }
    recur(root, 0, res);
    return res;
}
// @lc code=end

