const fs = require('fs');

const content =
  'This is some new content using async operation to write to the file.\n';

fs.writeFile('./data/output-async.txt', content, (error) => {
  if (error) {
    console.error('Error occurred:', error);
  } else {
    console.log('File written successfully using async operation.');
  }
});
