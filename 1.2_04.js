const authors = [
  {
    userId: 'author-01',
    name: 'Jane Austen',
    bookPublished: ['Pride and Prejudice', 'Sense and Sensibility'],
  },
  {
    userId: 'author-02',
    name: 'George Orwell',
    bookPublished: ['1984', 'Animal Farm'],
  },
  {
    userId: 'author-03',
    name: 'Harper Lee',
    bookPublished: ['To Kill a Mockingbird'],
  },
  {
    userId: 'author-04',
    name: 'James Achebe',
    bookPublished: ['Things Fall Apart'],
  },
  {
    userId: 'author-05',
    name: 'Isabel Allende',
    bookPublished: ['The House of the Spirits'],
  },
];

//? Task: Using the authors array, create a lookup object where each key is the userId
//? and the value is the corresponding author object. Use the reduce method to achieve this.

// expected Output:
// {
//   1: { userId: 1, name: 'Jane Austen', bookPublished: [...] },
//   2: { userId: 2, name: 'George Orwell', bookPublished: [...] },
//   ...
// }

const authorLookup = authors.reduce((lookup, author) => {
  lookup[author.userId] = author;
  return lookup;
}, {});
console.log(authorLookup);
