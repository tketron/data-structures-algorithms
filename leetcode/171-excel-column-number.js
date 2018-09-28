/**
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 *
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  // 64
  let count = 0;
  let multiplier = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    count += multiplier * (s.charCodeAt(i) - 64);
    multiplier += 25;
  }

  return count;
};

module.exports = titleToNumber;
