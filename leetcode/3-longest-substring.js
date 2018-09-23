/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * Given a string, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let left = 0;
  let right = 0;

  let maxLength = 0;
  let seenChars = new Set();

  while (left < s.length && right < s.length) {
    // console.log(seenChars);
    if (seenChars.has(s[right])) {
      seenChars.delete(s[left])
      left++;
    } else {
      seenChars.add(s[right]);
      right++;
    }
    maxLength = Math.max(maxLength, seenChars.size);
  }
  return maxLength;
};

// lengthOfLongestSubstring('abcabcbb');

module.exports = lengthOfLongestSubstring;