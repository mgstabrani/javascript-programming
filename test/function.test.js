/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('@jest/globals');
const { minimal, power } = require('../src/function/main');

test('minimal function should get the minimum value', () => {
  expect(minimal(1, 2)).toBe(1);
});

test('power function should get the power operation', () => {
  expect(power(3, 2)).toBe(9);
});
