const path = require('path');
const dotenv = require('dotenv');
dotenv.config({
  path: path.resolve(`${process.cwd()}/.env`),
});

console.log(`cwd: ${process.cwd()}/.env`);

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
};
