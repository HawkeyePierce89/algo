const fs = require('fs');
const path = require('path');

const countHappyNumbers = require('./countHappyNumbers');

function readTestData(filename) {
  const content = fs.readFileSync(path.join(__dirname, 'verification_data', filename), 'utf-8');
  return content.trim();
}

describe('Testing happyNumbersCount', () => {
  for (let i = 0; i <= 9; i++) {
    test(`Test case ${i}`, () => {
      const input = parseInt(readTestData(`test.${i}.in`), 10);
      const expectedOutput = readTestData(`test.${i}.out`);

      const result = countHappyNumbers(input);

      expect(result).toEqual(expectedOutput);
    });
  }
});
