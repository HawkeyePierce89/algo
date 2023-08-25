const { performance } = require('perf_hooks');

const pow_iterative = require('./pow/pow_iterative');
const pow_domultiply = require('./pow/pow_domultiply');
const pow_binary_decomposition = require('./pow/pow_binary_decomposition');

function measureExecutionTime(func, ...args) {
  const start = performance.now();
  func(...args);
  const end = performance.now();
  return end - start; // Время выполнения в миллисекундах
}

const number = 3;
const pow = 77777;

const pow1Result = measureExecutionTime(pow_iterative, number, pow);
const pow2Result = measureExecutionTime(pow_domultiply, number, pow);
const pow3Result = measureExecutionTime(pow_binary_decomposition, number, pow);

const results = [
  { 'Algorithm': 'pow_iterative', 'Execution Time (ms)': pow1Result.toFixed(4) },
  { 'Algorithm': 'pow_domultiply', 'Execution Time (ms)': pow2Result.toFixed(4) },
  { 'Algorithm': 'pow_binary_decomposition', 'Execution Time (ms)': pow3Result.toFixed(4) },
];

console.table(results);
