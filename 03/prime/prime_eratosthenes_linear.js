function prime_eratosthenes_linear(n) {
  const lp = new Array(n + 1).fill(0); // массив минимальных простых делителей для каждого числа
  const pr = []; // массив для хранения простых чисел

  for (let i = 2; i <= n; i++) {
    if (lp[i] === 0) {
      lp[i] = i; // число i простое, поэтому его минимальный делитель - это само число
      pr.push(i); // добавляем простое число в список
    }

    // Цикл для обновления массива lp
    for (
      let j = 0;
      j < pr.length &&       // 1) не превышаем длину массива простых чисел
      pr[j] <= lp[i] &&      // 2) текущий простой делитель не больше минимального простого делителя числа i
      pr[j] * i <= n;        // 3) произведение текущего простого делителя и числа i не превышает n
      j++
    ) {
      lp[pr[j] * i] = pr[j]; // задаем минимальный простой делитель для числа pr[j] * i
    }
  }

  return pr.length; // Возвращаем только длину списка простых чисел
}

module.exports = prime_eratosthenes_linear;
