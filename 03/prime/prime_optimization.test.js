const prime_optimization = require('./prime_optimization');

describe('prime_divisors_bruteforce function', () => {

  test('should return 0 for n = 0', () => {
    expect(prime_optimization(0)).toBe(0);
  });

  test('should return 0 for n = 1', () => {
    expect(prime_optimization(1)).toBe(0);
  });

  test('should return 1 for n = 2', () => {
    expect(prime_optimization(2)).toBe(1);
  });

  test('should return 2 for n = 3', () => {
    expect(prime_optimization(3)).toBe(2);
  });

  test('should return 4 for n = 10', () => {
    expect(prime_optimization(10)).toBe(4);
  });

  test('should return 25 for n = 100', () => {
    expect(prime_optimization(100)).toBe(25);
  });

  test('should return 168 for n = 1000', () => {
    expect(prime_optimization(1000)).toBe(168);
  });

  test('should return 1229 for n = 10000', () => {
    expect(prime_optimization(10000)).toBe(1229);
  });

});
