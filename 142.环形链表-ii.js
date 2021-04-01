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
	return solution1(head);
};
// 设a为从head到环形入口前的节点步数
// b为环形内的节点数
var solution1 = function (head) {
	let slow = head,
		fast = head;
	// 移动快慢指针，慢针走nb步
	while (true) {
		if (!fast || !fast.next) return null;
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) break;
	}
	// 从头开始移针，走a步
	// 此时慢针一共走a+nb步，一定会停在入口节点处
	fast = head;
	while (fast !== slow) {
		slow = slow.next;
		fast = fast.next;
	}
	return fast;
};

var solution2 = function (head) {
	let set = new Set();
	while (head) {
		if (set.has(head)) return head;
		set.add(head);
		head = head.next;
	}
	return null;
};
// @lc code=end
