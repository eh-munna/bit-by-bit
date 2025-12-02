import { pool } from '../../config/db';

const createTodo = async (
  user_id: string,
  title: string,
  description: string
) => {
  return await pool.query(
    `INSERT INTO todos(user_id, title, description)
     VALUES($1, $2, $3)
     RETURNING *`,
    [user_id, title, description]
  );
};

const getAllTodos = async () => {
  return await pool.query(`SELECT * FROM todos`);
};

const getTodoById = async (id: string) => {
  return await pool.query(`SELECT * FROM todos WHERE id = $1`, [id]);
};

const updateTodo = async (id: string, title: string, completed: boolean) => {
  return await pool.query(
    `UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *`,
    [title, completed, id]
  );
};

const deleteTodo = async (id: string) => {
  return await pool.query(`DELETE FROM todos WHERE id = $1 RETURNING *`, [id]);
};

export const todoService = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
