/**
 * https://leetcode.com/problems/single-number/description/
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let freq = {};
  for (num of nums) {
    freq[num] = freq[num] + 1 || 1;
  }

  for (num in freq) {
    if (freq[num] === 1) return +num;
  }
};

module.exports = singleNumber;
