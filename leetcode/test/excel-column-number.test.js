const titleToNumber = require('../171-excel-column-number.js');

test('it converts column titles to numbers', () => {
  expect(titleToNumber('A')).toBe(1);
  expect(titleToNumber('AB')).toBe(28);
  expect(titleToNumber('ZY')).toBe(701);
});
