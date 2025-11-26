// require the filesystem module of Node.js

const fs = require('fs');

console.log('File reading started...');

// Asynchronous read

fs.readFile('./data/content.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log(data);
  }
});

console.log('File reading is ended');
