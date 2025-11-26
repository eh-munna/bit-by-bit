const path = require('path');

console.log('Reading File Info:');

console.log('Directory:', __dirname);
console.log('File:', __filename);

const filePath = '/desktop/documents/intro.txt';

console.log('—'.repeat(60));

console.log(`File is located: ${filePath}`);
console.log('—'.repeat(60));
console.log(`Get the file directory: ${path.dirname(filePath)}`);
console.log('—'.repeat(60));
console.log(`Get the file name: ${path.basename(filePath)}`);
console.log('—'.repeat(60));
console.log(`Get the extension of the file: ${path.extname(filePath)}`);
console.log('—'.repeat(60));
console.log(
  `Remove the file extension: ${path.basename(
    filePath,
    path.extname(filePath)
  )}`
);
console.log('—'.repeat(60));
const pathObj = path.parse(filePath);
console.log(`Get the file path object:`, pathObj);
console.log('—'.repeat(60));
console.log(`Format the path from the object: ${path.format(pathObj)}`);
console.log('—'.repeat(60));
