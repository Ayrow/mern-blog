import express from 'express';
import {
  getAllPosts,
  addPost,
  getSinglePost,
  deletePost,
  updatePost,
  savePost,
  getAllSavedPosts,
  deleteSavedPost,
} from '../controllers/post.controller.js';

import authenticateUser from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getAllPosts);
router.route('/admin').post(authenticateUser, addPost);
router
  .route('/admin/post/:id')
  .patch(authenticateUser, updatePost)
  .delete(authenticateUser, deletePost);
router
  .route('/userPosts/saved')
  .post(authenticateUser, savePost)
  .get(authenticateUser, getAllSavedPosts);
router.route('/userPosts/saved/:id').delete(authenticateUser, deleteSavedPost);

router.route('/:id').get(getSinglePost);

export default router;
