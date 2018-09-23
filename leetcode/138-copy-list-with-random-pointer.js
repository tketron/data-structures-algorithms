/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/description/
 * 
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

  Return a deep copy of the list.
 */

/**
 * Definition for singly-linked list with a random pointer.
 * */
function RandomListNode(label) {
  this.label = label;
  this.next = this.random = null;
}

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  var newHead = copyNode(head);

  function copyNode(node) {
    if (node === null) return null;
    var nodeCopy = new RandomListNode(node.label);
    nodeCopy.next = copyNode(node.next);
    nodeCopy.random = copyNode(node.random);
    return nodeCopy;
  }

  return newHead;
};

var node1 = new RandomListNode(1);
var node2 = new RandomListNode(2);
var node3 = new RandomListNode(3);
var node4 = new RandomListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node1.random = node4;
node2.random = node1;
node4.random = node2;

copyRandomList(node1);


