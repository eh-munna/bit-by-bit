import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
  path: path.resolve(`${process.cwd()}/.env`),
});

export const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL,
};
