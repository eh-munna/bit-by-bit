import express, { Request, Response } from 'express';
import { config } from './config';
import initDB from './config/db';
import { logger } from './middleware/logger';
import { todoRoutes } from './modules/todo/todo.routes';
import { userRoutes } from './modules/user/user.routes';
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

const port = config.port;

// Root Route
app.get('/', logger, (req: Request, res: Response) => {
  res.send('Express server is running!');
});

// Initialize Database Tables
initDB();

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
