/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let reversedString = '';
    for (let i = s.length - 1; i >= 0; i--) {
      reversedString += s[i];
    }
    return reversedString;
};

module.exports = reverseString;