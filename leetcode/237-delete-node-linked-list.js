/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/description/
 *
 * Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  let curr = node;
  let next = curr.next;

  curr.val = next.val;
  curr.next = next.next;
};
