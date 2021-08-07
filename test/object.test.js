/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('@jest/globals');
const { restaurant, name, favoriteDrink } = require('../src/object/main');

test('name variable should contain name value in restaurant', () => {
  expect(name).toStrictEqual(restaurant.name);
});

test('favoriteDrink variable should contain favorite drink value in restaurant', () => {
  expect(favoriteDrink).toStrictEqual(restaurant['favorite drink']);
});
