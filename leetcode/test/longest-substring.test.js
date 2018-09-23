const longestSubstring = require('../3-longest-substring');

test('correctly identifies the longest substring', () => {
  expect(longestSubstring('abcabcbb')).toBe(3);
  expect(longestSubstring('pwwkew')).toBe(3);
  expect(longestSubstring(' ')).toBe(1);
});