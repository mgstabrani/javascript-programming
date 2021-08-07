const scoreChecker = require('../src/logic-operator-and-if-else/main');

test('scoreChecker function should get result based on score', () => {
  expect(scoreChecker(90)).toBe('Selamat! Anda mendapatkan nilai A.');
});