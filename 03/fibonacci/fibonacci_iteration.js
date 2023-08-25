function fibonacci_iteration(number) {
  if (number === 0) return 0;
  if (number === 1 || number === 2) return 1;

  // Переменная для хранения (number-2)-го числа Фибоначчи
  // Начинаем с 0, потому что это 0-е число Фибоначчи
  let prev = 0;

  // Переменная для хранения (number-1)-го числа Фибоначчи
  // Начинаем с 1, потому что это 1-е число Фибоначчи
  let current = 1;

  // Итерируемся от 2 до number, чтобы вычислить number-е число Фибоначчи
  for (let i = 2; i <= number; i++) {
    // Вычисляем следующее число Фибоначчи как сумму двух предыдущих
    let next = prev + current;

    // Обновляем (number-2)-е число Фибоначчи, присваивая ему значение (number-1)-го числа
    prev = current;

    // Обновляем (number-1)-е число Фибоначчи, присваивая ему значение number-го числа
    current = next;
  }

  // Возвращаем number-е число Фибоначчи
  return current;
}

module.exports = fibonacci_iteration;
