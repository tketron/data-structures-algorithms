/**
 * https://leetcode.com/problems/majority-element/description/
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let freq = {};

  for (const num of nums) {
    freq[num] = freq[num] + 1 || 1;
    if (freq[num] > nums.length / 2) return num;
  }
};
