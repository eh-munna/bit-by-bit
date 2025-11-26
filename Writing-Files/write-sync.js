// Require the File System module

const fs = require('fs');
const content = 'This is some new content to write to the file.\n';

try {
  fs.writeFileSync('./data/output.txt', content);
} catch (error) {
  console.error('Error occurred:', error);
}
