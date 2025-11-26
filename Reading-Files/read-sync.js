// requiring the *File System module* of Node.js

const fs = require('fs');

console.log('File reading started...');

// Synchronous read

try {
  const data = fs.readFileSync('./data/content.txt', {
    encoding: 'utf8',
  });
  console.log(data);
} catch (error) {
  console.error('Error reading file:', error);
}

console.log('File reading is ended');
