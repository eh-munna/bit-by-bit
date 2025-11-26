const fs = require('fs');

const content = 'Application has started successfully.\n';

try {
  fs.writeFileSync('./data/app.log', content);
} catch (error) {
  console.error('Error occurred:', error);
}

const logEntry = `New log entry added: ${new Date().toISOString()}\n`;

try {
  fs.appendFileSync('./data/app.log', logEntry);
  console.log('Log entry appended successfully.');
} catch (error) {
  console.error('Error occurred while appending:', error);
}
