const fibonacci_iteration = require('./fibonacci_iteration');

describe('fibonacci_iteration function', () => {
  test('should return 0 when number is 0', () => {
    expect(fibonacci_iteration(0)).toBe(0);
  });

  test('should return 1 when number is 1', () => {
    expect(fibonacci_iteration(1)).toBe(1);
  });

  test('should return 1 when number is 2', () => {
    expect(fibonacci_iteration(2)).toBe(1);
  });

  test('should return 5 when number is 5', () => {
    expect(fibonacci_iteration(5)).toBe(5);
  });

  test('should return 610 when number is 15', () => {
    expect(fibonacci_iteration(15)).toBe(610);
  });

  test('should return 5527939700884757 when number is 77', () => {
    expect(fibonacci_iteration(77)).toBe(5527939700884757);
  });
});
