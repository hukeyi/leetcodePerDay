/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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

var reverseList = function (head) {
	// return solution1(head);

	// 递归
	if (!head || !head.next) {
		return head;
	}
	let p = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return p;
};

var solution1 = function (head) {
	let prev = null;
	let curr = head;
	while (curr) {
		let temp = curr.next;
		curr.next = prev;
		prev = curr;
		curr = temp;
	}
	return prev;
};
// @lc code=end
