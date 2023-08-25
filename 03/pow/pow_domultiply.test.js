const pow_domultiply = require('./pow_domultiply');

test('pow_domultiply of 2 raised to 13 is 8192', () => {
  expect(pow_domultiply(2, 13)).toBe(8192);
});

test('pow_domultiply of 2 raised to 0 is 1', () => {
  expect(pow_domultiply(2, 0)).toBe(1);
});

test('pow_domultiply of 2 raised to 1 is 2', () => {
  expect(pow_domultiply(2, 1)).toBe(2);
});

test('pow_domultiply of 3 raised to 4 is 81', () => {
  expect(pow_domultiply(3, 4)).toBe(81);
});
