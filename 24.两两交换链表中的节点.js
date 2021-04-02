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
// recursive
var swapPairs = function (head) {
	return solu2(head);
};

// 递归
var solution1 = function (head) {
	if (!head || !head.next) return head;

	let [node1, node2, node3] = [head, head.next, head.next.next];
	node1.next = solution1(node3);
	node2.next = node1;
	return node2;
};

// 迭代
var solution2 = function (head) {
	if (!head || !head.next) return head;

	let dummy = new ListNode();
	dummy.next = head;
	let curr = dummy; //当前待翻转节点的上一个节点
	while (curr.next && curr.next.next) {
		let [node1, node2, node3] = [
			curr.next,
			curr.next.next,
			curr.next.next.next,
		];
		// 翻转
		node1.next = node3;
		node2.next = node1;
		// 连接已翻转节点列表和刚刚反转好的列表
		curr.next = node2;
		// 准备下一次翻转的列表的头一个节点
		curr = node1;
	}
	return dummy.next;
};
// @lc code=end
