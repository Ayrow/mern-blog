import BlogPost from '../models/BlogPost.js';
import User from '../models/User.js';
import Comments from '../models/Comments.js';

const addComment = async (req, res) => {
  const { postID, commentMessage } = req.body;

  if (!commentMessage) {
    throw Error('You need an account to post a comment');
  } else if (!commentMessage) {
    throw Error('You need to type a comment');
  } else {
    await Comments.create({
      body: commentMessage,
      post: postID,
      createdBy: req.user.userId,
    });
    res.status(200).json({ msg: 'comment added' });
  }

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
