const { expect } = require('@jest/globals');
const { myTiger, myWolf } = require('../src/module/main');

test('myTiger should has the right method', () => {
  expect(myTiger.growl()).toBe('grrrrrrr');
});

test('myWolf should has the right method', () => {
  expect(myWolf.howl()).toBe('Auuuuuuuuu');
});