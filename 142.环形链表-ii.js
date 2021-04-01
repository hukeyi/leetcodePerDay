/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
	return solu2(head);
};

// 1. fast and slow pointers
// 设a为从head到环形入口前的节点步数
// b为环形内的节点数
var solu1 = function (head) {
	let slow = (fast = head);
	do {
		// 移动快慢指针，慢针走nb步
		if (!fast || !fast.next) return null; //没有环
		slow = slow.next;
		fast = fast.next.next;
	} while (slow !== fast);
	// 从头开始移针，走a步
	// 此时慢针一共走a+nb步，一定会停在入口节点处
	fast = head;
	while (slow !== fast) {
		slow = slow.next;
		fast = fast.next;
	}
	return fast;
};

// 2. use Set
// return the first one that duplicated
var solu2 = function (head) {
	const set = new Set();
	while (head) {
		if (set.has(head)) return head;
		set.add(head);
		head = head.next;
	}
	return null;
};
// @lc code=end
