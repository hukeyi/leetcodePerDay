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
// var swapPairs = function(head){
//     if (!head || !head.next) return head;
//     let node1 = head, node2 = head.next, node3 = node2.next;
    
//     node2.next = node1;
//     node1.next = swapPairs(node3);
//     return node2;
// }

var swapPairs = function(head){
    const dummy = new ListNode(0, head);
    let curr = dummy;
    
    while (curr.next && curr.next.next){
        let node1 = curr.next;
        let node2 = curr.next.next;

        node1.next = node2.next;
        curr.next = node2;
        node2.next = node1;
        curr = node1;
    }
    return dummy.next;
}
// @lc code=end

