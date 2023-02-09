import express from 'express';
import {
  addComment,
  editComment,
  deleteComment,
  getAllComments,
} from '../controllers/comments.controller.js';

import authenticateUser from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getAllComments);
router.route('/user').post(authenticateUser, addComment);
router
  .route('/:id')
  .patch(authenticateUser, editComment)
  .delete(authenticateUser, deleteComment);

export default router;
