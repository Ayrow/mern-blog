import BlogPost from '../models/BlogPost.js';
import User from '../models/User.js';
import Comments from '../models/Comments.js';

const addComment = async (req, res) => {
  const { postID, commentMessage } = req.body;

  const user = await User.findOneAndUpdate(
    { _id: req.user.userId },
    { $push: { comments: commentMessage } }
  );

  const post = await BlogPost.findOneAndUpdate(
    { _id: postID },
    { $push: { comments: commentMessage } }
  );

  console.log('post', post);
  console.log('user', user);

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
