const fibonacci_matrix = require('./fibonacci_matrix');

describe('fibonacci_iteration function', () => {
  test('should return 0 when number is 0', () => {
    expect(fibonacci_matrix(0)).toBe(0);
  });

  test('should return 1 when number is 1', () => {
    expect(fibonacci_matrix(1)).toBe(1);
  });

  test('should return 1 when number is 2', () => {
    expect(fibonacci_matrix(2)).toBe(1);
  });

  test('should return 5 when number is 5', () => {
    expect(fibonacci_matrix(5)).toBe(5);
  });

  test('should return 610 when number is 15', () => {
    expect(fibonacci_matrix(15)).toBe(610);
  });

  test('should return 5527939700884757 when number is 77', () => {
    expect(fibonacci_matrix(77)).toBe(5527939700884757);
  });
});
