/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;

  let node = BSTHelper(low, high);
  return node;

  function BSTHelper(low, high) {
    if (low > high) return;

    let mid = Math.floor(high - low / 2);
    let node = new TreeNode(nums[mid]);
    node.left = BSTHelper(low, mid);
    node.right = BSTHelper(mid + 1, high);
    return node;
  }
};
