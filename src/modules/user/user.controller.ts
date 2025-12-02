import { Request, Response } from 'express';
import { pool } from '../../config/db';
import { userService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  const { name, email } = req?.body;

  try {
    const result = await userService.createUser(name, email);
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
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsers();
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
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userService.getUserById(id);
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
};

const updateUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const result = await userService.updateUserById({ id, name, email });
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
};

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userService.deleteUserById(id);
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
};

export const userControllers = {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
};
