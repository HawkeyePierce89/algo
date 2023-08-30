function prime_eratosthenes(n) {
  // Если n меньше 2, нет простых чисел до n
  if (n < 2) return 0;

  // Создаем массив boolean значений для отметки чисел, являющихся простыми
  const isPrime = Array(n + 1).fill(true);

  // 0 и 1 не являются простыми числами
  isPrime[0] = isPrime[1] = false;

  // Проходим через все числа до n
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      // Если число простое, помечаем все его кратные как составные
      for (let j = 2 * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Подсчитываем количество true значений в массиве isPrime, что будет равно количеству простых чисел
  return isPrime.filter(Boolean).length;
}

module.exports = prime_eratosthenes;
