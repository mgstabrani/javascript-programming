/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const { expect } = require("@jest/globals");
const { currency, priceInJPY, priceInIDR } = require("../src/map/main");

test("the variables should contain exact values", () => {
  const testCurrency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500],
  ]);
  expect(currency).toStrictEqual(testCurrency);
  expect(priceInJPY).toStrictEqual(5000);
  expect(priceInIDR).toStrictEqual(131 * priceInJPY);
});
