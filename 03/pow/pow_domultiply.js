/**
 * Функция домножает число на себя заданное количество раз
 */
function domultiply(number, times) {
  let result = number;
  // Домножаем число заданное количество раз
  for (let i = 1; i < times; i++) {
    result *= number;
  }
  return result;
}

function pow_domultiply(number, pow) {
  // Базовые случаи
  if (pow === 0) return 1;
  if (pow === 1) return number;

  let halfPower;
  if (pow % 2 === 0) { // Если степень четная
    // Возведем число в степень pow/2
    halfPower = domultiply(number, pow / 2);
    // И возводим полученный результат в квадрат
    return halfPower * halfPower;
  } else { // Если степень нечетная
    // Возводим число в степень pow-1 и домножаем на number
    return number * pow_domultiply(number, pow - 1);
  }
}

module.exports = pow_domultiply;
