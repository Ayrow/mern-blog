import express from 'express';
import {
  registerUser,
  loginUser,
  deleteUser,
  updateUser,
  getAllUsers,
} from '../controllers/auth.controller.js';

import authenticateUser from '../middleware/auth.js';

const router = express.Router();

router.route('/registerUser').post(registerUser);
router.route('/loginUser').post(loginUser);
router.route('/users').get(authenticateUser, getAllUsers);
router
  .route('/user/:id')
  .patch(authenticateUser, updateUser)
  .delete(authenticateUser, deleteUser);

export default router;
