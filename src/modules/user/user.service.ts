import { pool } from '../../config/db';

const createUser = async (name: string, email: string) => {
  const result = await pool.query(
    `INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`,
    [name, email]
  );
  return result;
};

const getAllUsers = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result;
};

const getUserById = async (id: string | undefined) => {
  const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return result;
};

const updateUserById = async (payload: any) => {
  const result = await pool.query(
    `
        
        UPDATE users SET email = $1, name = $2
        WHERE id = $3 RETURNING *
        `,
    [payload.email, payload.name, payload.id]
  );
  return result;
};

const deleteUserById = async (id: string | undefined) => {
  const result = await pool.query(
    `DELETE FROM users WHERE id = $1 RETURNING *`,
    [id]
  );
  return result;
};

export const userService = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
