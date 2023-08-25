const fibonacci_bine = require('./fibonacci_bine');

describe('fibonacci_iteration function', () => {
  test('should return 0 when number is 0', () => {
    expect(fibonacci_bine(0)).toBe(0);
  });

  test('should return 1 when number is 1', () => {
    expect(fibonacci_bine(1)).toBe(1);
  });

  test('should return 1 when number is 2', () => {
    expect(fibonacci_bine(2)).toBe(1);
  });

  test('should return 5 when number is 5', () => {
    expect(fibonacci_bine(5)).toBe(5);
  });

  test('should return 610 when number is 15', () => {
    expect(fibonacci_bine(15)).toBe(610);
  });

  test('should return 5527939700884757 with delta is 100 when number is 77', () => {
    const result = fibonacci_bine(77);
    const expected = 5527939700884757;
    const delta = Math.abs(result - expected);

    expect(delta).toBeLessThan(100);
  });
});
