function prime_optimization(n) {
  if (n < 2) return 0;

  // Список найденных простых чисел
  const primes = [2];
  let count = 1; // Учитываем число 2

  for (let i = 3; i <= n; i += 2) { // Переходим сразу к следующему нечетному числу
    let isPrimeFlag = true;

    // Проверяем делители только среди простых чисел и только до квадратного корня из числа i
    for (let j = 0; j < primes.length && primes[j] * primes[j] <= i; j++) {
      if (i % primes[j] === 0) {
        isPrimeFlag = false;
        break;
      }
    }

    if (isPrimeFlag) {
      primes.push(i);
      count++;
    }
  }

  return count;
}

module.exports = prime_optimization;
