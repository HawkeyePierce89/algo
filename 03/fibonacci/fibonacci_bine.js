function fibonacci_bine(number) {
  if (number === 0) return 0;
  if (number === 1 || number === 2) return 1;

  // Число золотого сечения
  const phi = (1 + Math.sqrt(5)) / 2;

  // Формула Бине для вычисления number-го числа Фибоначчи
  return Math.round(Math.pow(phi, number) / Math.sqrt(5));
}

module.exports = fibonacci_bine;
