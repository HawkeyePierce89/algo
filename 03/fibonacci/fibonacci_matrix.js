/**
 * Функция умножает две матрицы
 */
function matrixMultiply(A, B) {
  const rowsA = A.length;
  const colsA = A[0].length;
  const rowsB = B.length;
  const colsB = B[0].length;

  // Проверка на возможность умножения матриц
  if (colsA !== rowsB) {
    throw new Error("Матрицы не могут быть перемножены");
  }

  // Создаем результирующую матрицу с нулевыми значениями
  const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return result;
}

/**
 * Функция возводит матрицу в степень
 */
function matrixPower(A, n) {
  // Если степень равна 0 возвращаем единичную матрицу
  if (n === 0) {
    return Array.from({ length: A.length }, (_, i) =>
      Array.from({ length: A.length }, (_, j) =>
        i === j ? 1 : 0
      )
    );
  }

  // Если степень нечетная
  if (n % 2 === 1) {
    return matrixMultiply(A, matrixPower(A, n - 1));
  }

  // Если степень четная
  const halfPower = matrixPower(A, n / 2);
  return matrixMultiply(halfPower, halfPower);
}

/**
 * Функция вычисляет n-е число Фибоначчи через умножение матриц.
 */
function fibonacci_matrix(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  const baseMatrix = [
    [1, 1],
    [1, 0]
  ];

  const resultMatrix = matrixPower(baseMatrix, n - 1);
  return resultMatrix[0][0];
}

module.exports = fibonacci_matrix;
