const { expect } = require('@jest/globals');
const {firstName, lastName, age, isMarried} = require('../src/variable-and-data-type/main');

test('the variables should contain appropriate values', () => {
  expect(firstName).toStrictEqual('Mgs.');
  expect(lastName).toStrictEqual('Tabrani');
  expect(age).toStrictEqual(19);
  expect(isMarried).toStrictEqual(false);
});