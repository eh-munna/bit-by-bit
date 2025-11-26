const path = require('path');

const dotenv = require('dotenv');
dotenv.config({
  path: path.resolve(`${process.cwd()}/.env`),
});

const config = {
  app: {
    ENV: process.env.ENV || 'development',
    PORT: process.env.PORT || 8080,
    APP_NAME: process.env.APP_NAME || 'bit-by-bit',
    VERSION: process.env.VERSION || '1.0.0',
  },
};
module.exports = config;

console.log(config.app.APP_NAME);
