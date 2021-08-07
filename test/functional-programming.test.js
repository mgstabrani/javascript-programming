const { expect } = require('@jest/globals');
const { greatAuthors } = require('../src/functional-programming/main');

test('the variable should contain the right value', () => {
  const greatAuthorsTest = [
    'Dan Brown adalah penulis buku The Da Vinci Code yang sangat hebat!',
    'E. L. James adalah penulis buku Fifty Shades of Grey yang sangat hebat!',
    'J.K Rowling adalah penulis buku Harry Potter and the Deathly Hallows yang sangat hebat!'
  ];

  expect(greatAuthors).toStrictEqual(greatAuthorsTest);
});