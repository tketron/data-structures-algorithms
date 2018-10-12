/**
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head = null;
  let l1Node = l1;
  let l2Node = l2;

  if (l1Node.val <= l2Node.val) {
    head = l1Node;
    l1Node = l1Node.next;
  } else {
    head = l2Node;
    l2Node = l2Node.next;
  }
  let currNode = head;

  while (l1Node.next !== null && l2Node.next !== null) {
    if (l1Node.val <= l2Node.val) {
      currNode.next = l1Node;
      l1Node = l1Node.next;
    } else {
      currNode.next = l2Node;
      l2Node = l2Node.next;
    }

    currNode = currNode.next;
  }
  return head;
};
