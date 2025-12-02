import { NextFunction, Request, Response } from "express";
import fs from "fs";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  fs.writeFile(
    `${process.cwd()}/src/logs.txt`,
    `Request Method: ${req.method}, Request URL: ${req.url}\n`,
    (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      } else {
        console.log('Log written successfully');
      }
    }
  );
  next();
};