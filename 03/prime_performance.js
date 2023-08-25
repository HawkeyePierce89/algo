const { performance } = require('perf_hooks');

const prime_divisors_bruteforce = require('./prime/prime_divisors_bruteforce');
const prime_optimization = require('./prime/prime_optimization');
const prime_eratosthenes = require('./prime/prime_eratosthenes');
const prime_eratosthenes_linear = require('./prime/prime_eratosthenes_linear');

function measureExecutionTime(func, ...args) {
  const start = performance.now();
  func(...args);
  const end = performance.now();
  return end - start; // Время выполнения в миллисекундах
}

const number = 400_000;

const pow1Result = measureExecutionTime(prime_divisors_bruteforce, number);
const pow2Result = measureExecutionTime(prime_optimization, number);
const pow3Result = measureExecutionTime(prime_eratosthenes, number);
const pow4Result = measureExecutionTime(prime_eratosthenes_linear, number);

const results = [
  { 'Algorithm': 'prime_divisors_bruteforce', 'Execution Time (ms)': pow1Result.toFixed(4) },
  { 'Algorithm': 'prime_optimization', 'Execution Time (ms)': pow2Result.toFixed(4) },
  { 'Algorithm': 'prime_eratosthenes', 'Execution Time (ms)': pow3Result.toFixed(4) },
  { 'Algorithm': 'prime_eratosthenes_linear', 'Execution Time (ms)': pow4Result.toFixed(4) },
];

console.table(results);
