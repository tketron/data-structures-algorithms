/**
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * Given an array of integers, find if the array contains any duplicates.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let freq = {};

  for (let n of nums) {
    if (freq[n]) return true;
    freq[n] = 1;
  }

  return false;
};
