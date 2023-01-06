import express from 'express';
import {
  getAllPosts,
  addPost,
  commentPost,
  getSinglePost,
  deletePost,
  savePost,
  getAllSavedPosts,
  deleteSavedPost,
} from '../controllers/post.controller.js';

import authenticateUser from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getAllPosts);
router.route('/admin').post(authenticateUser, addPost);
router.route('/admin/:id').delete(authenticateUser, deletePost);
router
  .route('/userPosts/saved')
  .post(authenticateUser, savePost)
  .get(authenticateUser, getAllSavedPosts);
router.route('/userPosts/saved/:id').delete(authenticateUser, deleteSavedPost);
router.route('/:id').post(authenticateUser, commentPost).get(getSinglePost);

export default router;
