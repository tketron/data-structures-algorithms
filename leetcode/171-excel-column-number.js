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
  let count = 0;
  let multiplier = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    count += (s.charCodeAt(i) - 64) * 26 ** multiplier;
    multiplier++;
  }

  return count;
};

module.exports = titleToNumber;
