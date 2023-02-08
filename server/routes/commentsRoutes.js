import express from 'express';
import {
  addComment,
  editComment,
  deleteComment,
  getAllComments,
} from '../controllers/comments.controller.js';

const router = express.Router();

router.route('/').get(getAllComments).post(addComment);
router.route('/:id').patch(editComment).delete(deleteComment);

export default router;
