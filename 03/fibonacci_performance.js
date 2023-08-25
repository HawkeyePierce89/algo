const { performance } = require('perf_hooks');

const fibonacci_recursion = require('./fibonacci/fibonacci_recursion');
const fibonacci_iteration = require('./fibonacci/fibonacci_iteration');
const fibonacci_bine = require('./fibonacci/fibonacci_bine');
const fibonacci_matrix = require('./fibonacci/fibonacci_matrix');

function measureExecutionTime(func, ...args) {
  const start = performance.now();
  func(...args);
  const end = performance.now();
  return end - start; // Время выполнения в миллисекундах
}

const number = 33;

const fibonacci1Result = measureExecutionTime(fibonacci_recursion, number);
const fibonacci2Result = measureExecutionTime(fibonacci_iteration, number);
const fibonacci3Result = measureExecutionTime(fibonacci_bine, number);
const fibonacci4Result = measureExecutionTime(fibonacci_matrix, number);

const results = [
  { 'Algorithm': 'fibonacci_recursion', 'Execution Time (ms)': fibonacci1Result.toFixed(4) },
  { 'Algorithm': 'fibonacci_iteration', 'Execution Time (ms)': fibonacci2Result.toFixed(4) },
  { 'Algorithm': 'fibonacci_bine', 'Execution Time (ms)': fibonacci3Result.toFixed(4) },
  { 'Algorithm': 'fibonacci_matrix', 'Execution Time (ms)': fibonacci4Result.toFixed(4) },
];

console.table(results);
