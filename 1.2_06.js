const { json } = require('stream/consumers');

const users = [
  { id: 'user-01', name: 'Alice' },
  { id: 'user-02', name: 'Bob' },
  { id: 'user-03', name: 'Charlie' },
];

const posts = [
  { postId: 'post-01', userId: 'user-01', content: 'Hello World' },
  { postId: 'post-02', userId: 'user-02', content: 'Learning JavaScript' },
  { postId: 'post-03', userId: 'user-01', content: 'Writing Code' },
  { postId: 'post-04', userId: 'user-03', content: 'Good Morning' },
];

const normalizedData = users.map((user) => {
  return {
    ...user,
    posts: posts.filter((post) => post.userId === user.id),
  };
});

// const normalizedData = users.reduce((acc, user) => {
//   const userPosts = posts.filter((post) => post.userId === user.id);
//   acc.push({ ...user, posts: [...userPosts] });
//   return acc;
// }, []);

// console.log(normalizedData);
// const normalizedData = [...users];
// console.log(normalizedData);

const postGroupsTable = posts.reduce((table, post) => {
  console.log(table);
  if (!table[post.userId]) {
    table[post.userId] = [];
  }
  table[post.userId].push(post);
  return table;
}, {});

const newNormalizedData = users.map((user) => ({
  ...user,
  posts: postGroupsTable[user.id] || [],
}));
console.log(JSON.stringify(newNormalizedData));

// const authors = [
//   { id: 'a1', name: 'Leo Tolstoy' },
//   { id: 'a2', name: 'Jane Austen' },
//   { id: 'a3', name: 'George Orwell' },
// ];

// const books = [
//   { id: 'b1', authorId: 'a1', title: 'War and Peace' },
//   { id: 'b2', authorId: 'a2', title: 'Pride and Prejudice' },
//   { id: 'b3', authorId: 'a3', title: '1984' },
//   { id: 'b4', authorId: 'a1', title: 'Anna Karenina' },
// ];
// const bookMap = new Map();

// // for (const book of books) {
// //   if (!bookMap.has(book.authorId)) {
// //     bookMap.set(book.authorId, []);
// //   }
// //   bookMap.get(book.authorId).push(book);
// // }
// console.log(bookMap);
