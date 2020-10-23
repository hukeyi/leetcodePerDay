/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归 92
// var swapPairs = function(head) {
//     if (!head || !head.next) return head;

//     let n1 = head, n2 = head.next, n3 = n2.next;
//     n2.next = head;
//     n1.next = swapPairs(n3);
//     return n2;
// };

// 迭代 96.9 72ms
var swapPairs = function(head) {
    const dummy = new ListNode();
    dummy.next = head;
    let curr = dummy;

    while (curr.next && curr.next.next){
        let node1 = curr.next;
        let node2 = curr.next.next;
        node1.next = node2.next; //1-3-4
        curr.next = node2; //dummy-2
        node2.next = node1; //dummy-2-1-3-4
        curr = node1; //curr-1
    }
    return dummy.next;
};
// @lc code=end

