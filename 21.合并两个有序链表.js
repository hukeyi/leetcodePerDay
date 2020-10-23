/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * 1. 按顺序放栈，再连接， 2 loop o(n)
 */
// 91.4 迭代 o(n+m)
// var mergeTwoLists1 = function(l1, l2){
//     if (!l1 || !l2) return (!l1 ? l2 : l1);

//     let dummy = curr = new ListNode();
//     while (l1 && l2){
//         if (l1.val < l2.val){
//             curr.next = l1;
//             l1 = l1.next;
//         }else{
//             curr.next = l2;
//             l2 = l2.next;
//         }
//         curr = curr.next;
//     }
//     curr.next = (l1 ? l1 : l2);
//     return dummy.next;
// }

// 98.78 recursive o(n+m)
var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) return (!l1 ? l2 : l1);

    if (l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l2.next, l1);
        return l2;
    }
};
// @lc code=end

