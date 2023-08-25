const fibonacci_recursion = require('./fibonacci_recursion');

describe('fibonacci_iteration function', () => {
  test('should return 0 when number is 0', () => {
    expect(fibonacci_recursion(0)).toBe(0);
  });

  test('should return 1 when number is 1', () => {
    expect(fibonacci_recursion(1)).toBe(1);
  });

  test('should return 1 when number is 2', () => {
    expect(fibonacci_recursion(2)).toBe(1);
  });

  test('should return 5 when number is 5', () => {
    expect(fibonacci_recursion(5)).toBe(5);
  });

  test('should return 610 when number is 15', () => {
    expect(fibonacci_recursion(15)).toBe(610);
  });
});
