const getSum = require('../371-sum-of-two-integers');

xtest('correctly sums two integers', () => {
  expect(getSum(1, 2)).toBe(3);
  expect(getSum(-5, -5)).toBe(-10);
  expect(getSum(10, -50)).toBe(-40);
  expect(getSum(0, 1000)).toBe(1000);
});
