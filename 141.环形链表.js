/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	return solu2(head);
};

// 1. set 判重
var solu1 = function (head) {
	const set = new Set();
	while (head) {
		if (set.has(head)) return true;
		set.add(head);
		head = head.next;
	}
	return false;
};
// 2. slow and fast pointers
var solu2 = function (head) {
	if (!head || !head.next) return false;
	let slow = head,
		fast = head;
	do {
		if (!fast || !fast.next) return false;
		slow = slow.next;
		fast = fast.next.next;
	} while (slow !== fast);
	return true;
};
// @lc code=end
