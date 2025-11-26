const fs = require('fs');
console.log('Process is started...');

fs.writeFile('./data/temp.txt', 'Temporary file content.\n', (err) => {
  if (err) {
    console.error('Error occurred during file creation:', err);
    return;
  }
});
console.log('File created successfully.');

if (fs.existsSync('./data/temp.txt')) {
  console.error('File exist!');
  fs.unlink('./data/temp.txt', (error) => {
    if (error) {
      console.error('Error occurred during file deletion:', error);
    } else {
      console.log('File deleted successfully.');
    }
  });
} else {
  console.error("File doesn't exist!");
}

console.log('Process is completed.');
