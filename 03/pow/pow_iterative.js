function pow_iterative(number, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result *= number;
  }
  return result;
}

module.exports = pow_iterative;
