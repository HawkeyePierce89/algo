/**
 * Проверяет, является ли число простым.
 */
function isPrime(num) {
  // Числа 0 и 1 не являются простыми
  if (num <= 1) return false;

  // Проверяем, делится ли число на любое другое число кроме 1 и самого себя
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // Если делится, то число не простое
  }

  // Если число не имело делителей кроме 1 и самого себя, оно простое
  return true;
}

function prime_divisors_bruteforce(n) {
  let count = 0; // Счетчик для подсчета простых чисел

  // Перебираем все числа от 2 до n
  for (let i = 2; i <= n; i++) {
    // Если число простое, увеличиваем счетчик на 1
    if (isPrime(i)) count++;
  }

  return count;
}

module.exports = prime_divisors_bruteforce;
