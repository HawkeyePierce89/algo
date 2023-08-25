function fibonacci_recursion(number) {
  if (number === 0) return 0;
  if (number === 1 || number === 2) return 1;

  return fibonacci_recursion(number - 1) + fibonacci_recursion(number - 2);
}

module.exports = fibonacci_recursion;
