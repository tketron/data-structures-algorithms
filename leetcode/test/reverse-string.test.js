const reverseString = require('../344-reverse-string');

test('correctly reverses the string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('')).toBe('');
  expect(reverseString('A man, a plan, a canal: Panama')).toBe('amanaP :lanac a ,nalp a ,nam A');
});