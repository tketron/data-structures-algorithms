/**
 * https://leetcode.com/problems/reverse-linked-list/description/
 * Reverse a singly linked list.
 */

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
var reverseList = function(head) {
  if (head === null) return null;

  let prev = null;
  let curr = head;
  let next = head.next;
  curr.next = prev;

  while (next !== null) {
    prev = curr;
    curr = next;
    if (curr) next = curr.next;
    curr.next = prev;
  }

  return curr;
};
