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
const router = express.Router();

router.route('/').get(getAllPosts);
router.route('/admin').post(addPost);
router.route('/admin/:id').delete(deletePost);
router.route('/userPosts/saved').post(savePost).get(getAllSavedPosts);
router.route('/userPosts/saved/:id').delete(deleteSavedPost);
router.route('/:id').post(commentPost).get(getSinglePost);

export default router;
