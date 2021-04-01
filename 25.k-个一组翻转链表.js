/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
	return solution1(head, k);
};

const flip = function (head) {
	if (!head || !head.next) return head;

	let pre = null,
		nex = null,
		cur = head;
	while (cur) {
		// 翻转前保存下一个待翻转节点
		nex = cur.next;
		// 翻转
		cur.next = pre;
		pre = cur;
		cur = nex;
	}
	return pre;
};

var solution1 = function (head, k) {
	if (!head || !head.next) {
		return head;
	}
	let dummy = new ListNode();
	dummy.next = head;
	let pre = dummy,
		end = dummy;
	while (end.next) {
		for (let i = 0; i < k && end; i++) {
			end = end.next;
		}
		if (!end) break;

		let nex = end.next;
		end.next = null; // break the link
		let start = pre.next;
		pre.next = flip(start);
		start.next = nex;
		pre = start;
		end = start;
	}
	return dummy.next;
};
// @lc code=end
