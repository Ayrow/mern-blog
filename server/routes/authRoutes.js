import express from 'express';
import {
  registerUser,
  loginUser,
  deleteUser,
  updateUser,
  getAllUsers,
  savePost,
  getAllSavedPosts,
  deleteSavedPost,
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

router
  .route('/savedPosts')
  .post(authenticateUser, savePost)
  .get(authenticateUser, getAllSavedPosts);
router.route('/savedPosts/:id').delete(authenticateUser, deleteSavedPost);

export default router;
