const singleNumber = require('../136-single-number');

test('correctly identifies the single number', () => {
  expect(singleNumber([2,2,1])).toBe(1);
  expect(singleNumber([4,1,2,1,2])).toBe(4);
  expect(singleNumber([100,101,100,5,101,3000,3000])).toBe(5);
});