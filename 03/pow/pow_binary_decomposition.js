function pow_binary_decomposition(number, pow) {
  // Базовые случаи:
  // Если степень равна 0, ответ всегда 1
  if (pow === 0) return 1;
  // Если степень равна 1, ответ равен основанию
  if (pow === 1) return number;

  // Если степень четная, используем свойство number^(2k) = (number^k)^2
  if (pow % 2 === 0) {
    let halfPower = pow_binary_decomposition(number, pow / 2); // Возведем number в степень pow/2
    return halfPower * halfPower; // и возводим полученный результат в квадрат
  } else {
    // Если степень нечетная, используем свойство number^(2k+1) = number * (number^k)^2
    let halfPower = pow_binary_decomposition(number, (pow - 1) / 2); // Возведем number в степень (pow-1)/2
    return number * halfPower * halfPower; // Умножаем на number и возводим результат в квадрат
  }
}

module.exports = pow_binary_decomposition;
