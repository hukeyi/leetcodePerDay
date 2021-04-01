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
	// 递归
	return solu2(head);
};

// 递归
// 1-2-3-4-5
var solu1 = function (head) {
	if (!head || !head.next) return head;
	let p = solu1(head.next); // 新链表的头节点[5]
	head.next.next = head;
	head.next = null;
	return p;
};

// 迭代
// 从头开始，头指针为curr，前一个为prev，后一个为temp
// 1. 记录curr的下一个节点
// 2. 将curr的next指针反转。指向prev
// 3. 开始移动这三个指针，下一轮继续反转下一个节点
var solu2 = function (head) {
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
