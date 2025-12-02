import { Request, Response } from 'express';
import { todoService } from './todo.service';

const createTodo = async (req: Request, res: Response) => {
  const { user_id, title, description } = req.body;

  try {
    const result = await todoService.createTodo(user_id, title, description);
    res.status(201).json({
      success: true,
      message: 'Todo created successfully',
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Error creating todo',
    });
  }
};

const getAllTodos = async (req: Request, res: Response) => {
  try {
    const result = await todoService.getAllTodos();
    res.status(200).json({
      success: true,
      message: 'Todos retrieved successfully',
      data: result.rows,
    });
  } catch (err: any) {
    res
      .status(500)
      .json({ success: false, message: err.message || 'Error fetching todos' });
  }
};

const getTodoById = async (req: Request, res: Response) => {
  try {
    const result = await todoService.getTodoById(req.params.id!);

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: 'Todo not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Todo fetched successfully',
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Failed to fetch todo',
    });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  const { title, completed } = req.body;

  try {
    const result = await todoService.updateTodo(
      req.params.id!,
      title,
      completed
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: 'Todo not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Todo updated successfully',
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Failed to update todo',
    });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoService.deleteTodo(req.params.id!);

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: 'Todo not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Todo deleted',
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Failed to delete todo',
    });
  }
};

export const todoControllers = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
