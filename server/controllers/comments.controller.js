import BlogPost from '../models/BlogPost.js';
import User from '../models/User.js';

const addComment = async (req, res) => {
  res.status(200).json({ msg: 'comment Post' });
};

const editComment = async (req, res) => {
  res.status(200).json({ msg: 'Edit comment' });
};

const deleteComment = async (req, res) => {
  res.status(200).json({ msg: 'delete Comment' });
};

const getAllComments = async (req, res) => {
  res.status(200).json({ msg: 'comment Post' });
};

export { addComment, editComment, deleteComment, getAllComments };
