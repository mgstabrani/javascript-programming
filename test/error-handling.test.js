/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('@jest/globals')
const {
  ValidationError,
  validateNumberInput
} = require('../src/error-handling/main')

test('validateNumberInput should throw the right one', () => {
  expect(validateNumberInput).toThrowError(ValidationError)
})
