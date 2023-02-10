import express from 'express';
import {
  addComment,
  editComment,
  deleteComment,
  getAllComments,
  getUserComments,
  getPostComments,
} from '../controllers/comments.controller.js';

import authenticateUser from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getAllComments);
router.route('/user/').post(authenticateUser, addComment);
router.route('/user/:id').get(authenticateUser, getUserComments);
router.route('/post/:id').get(getPostComments);
router
  .route('/:id')
  .patch(authenticateUser, editComment)
  .delete(authenticateUser, deleteComment);

export default router;
