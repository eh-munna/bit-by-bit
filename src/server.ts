import express, { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import { Pool } from 'pg';
import { config } from './config';
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const port = config.port;

const pool = new Pool({ connectionString: `${config.databaseUrl}` });

//

const logger = (req: Request, res: Response, next: NextFunction) => {
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

// Root Route
app.get('/', logger, (req: Request, res: Response) => {
  res.send('Express server is running!');
});

// Create User
app.post('/users', async (req: Request, res: Response) => {
  const { name, email } = req?.body;

  try {
    const result = await pool.query(
      `INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`,
      [name, email]
    );
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Error creating user',
    });
  }
});

// Get All Users
app.get('/users', async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Error fetching users',
    });
  }
});
// Get User by ID
app.get('/users/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    console.log(result);
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
      return;
    } else {
      res.status(200).json({
        success: true,
        message: 'User fetched successfully',
        data: result.rows[0],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Error fetching user',
    });
  }
});

// Update User by ID

app.put('/users/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const result = await pool.query(
      `UPDATE users SET email = $1, name = $2 WHERE id = $3 RETURNING *`,
      [email, name, id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
      return;
    } else {
      res.status(200).json({
        success: true,
        message: 'User updated successfully',
        data: result.rows[0],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Error updating user',
    });
  }
});

// Delete User by ID
app.delete('/users/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `DELETE FROM users WHERE id = $1 RETURNING *`,
      [id]
    );
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
      return;
    } else {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully',
        data: null,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Error deleting user',
    });
  }
});

// Create TODO
app.post('/todos', async (req: Request, res: Response) => {
  const { user_id, title, description } = req?.body;

  try {
    const result = await pool.query(
      `INSERT INTO todos(user_id, title, description)
      VALUES($1, $2, $3)
      RETURNING *`,
      [user_id, title, description]
    );
    res.status(201).json({
      success: true,
      message: 'Todo created successfully',
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Error creating todo',
    });
  }
});

// Initialize Database Tables

const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    age INT,
    phone VARCHAR(25),
    address VARCHAR(200),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    )`);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS todos(
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      title VARCHAR(200) NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT false,
      due_date DATE,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
      )`);
};

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
