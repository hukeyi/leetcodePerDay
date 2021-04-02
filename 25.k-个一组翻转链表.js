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
	return solu1(head, k);
};

var flip = function (head) {
	if (!head || !head.next) return head;
	let prev = null,
		curr = head;
	while (curr) {
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
};

var solution1 = function (head, k) {
	if (!head || !head.next) return head;

	let dummy = new ListNode(0, head);
	let pre = (end = dummy);
	while (end.next) {
		// 将end指针移动到该去的位置
		for (let i = 0; i < k && end; i++) {
			end = end.next;
		}
		if (!end) break;
		let next = end.next; //记录下一轮的第一个节点；为断开后的连接作准备
		end.next = null; //断开链表；断点前是将要反转的部分；断点后是未反转的部分

		let curr = pre.next; //指向待反转链表第一个节点
		pre.next = flip(curr); //反转

		curr.next = next; //连接刚刚反转好的链表组和后面未反转的链表组
		[pre, end] = [curr, curr]; //移动头尾指针
	}
	return dummy.next;
};
// @lc code=end
