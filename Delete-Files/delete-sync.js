const fs = require('fs');

console.log('Process is started...');

try {
  console.log('File creation is on process...');
  fs.writeFileSync('./data/temp.txt', 'Temporary file content.\n');
  console.log('File created successfully.');
} catch (error) {
  console.error('Error occurred during file creation:', error);
}

try {
  console.log('File deletion is on process...');
  fs.unlinkSync('./data/temp.txt');
  console.log('File deleted successfully.');
} catch (error) {
  console.error('Error occurred during file deletion:', error);
}

console.log('Process is completed.');
