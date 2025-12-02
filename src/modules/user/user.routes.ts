import { Router } from 'express';
import { userControllers } from './user.controller';

const router = Router();

// Create User
router.post('/', userControllers.createUser);

// Get All Users
router.get('/', userControllers.getAllUsers);

// Get User by ID
router.get('/:id', userControllers.getUserById);

// Update User by ID
router.put('/:id', userControllers.updateUserById);

// Delete User by ID
router.delete('/:id', userControllers.deleteUserById);

export const userRoutes = router;
