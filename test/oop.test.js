/* eslint-disable import/no-extraneous-dependencies */
const { test, expect } = require('@jest/globals')
const { myRabbit, myEagle } = require('../src/oop/main')

test('myRabbit instance should has the right method', () => {
  expect(myRabbit.eat()).toBe('Labi sedang makan!')
})

test('myEagle instance should has the right method', () => {
  expect(myEagle.fly()).toBe('Elo sedang terbang!')
})
