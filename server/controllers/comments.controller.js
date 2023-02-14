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
    const user = await User.findOne({ _id: req.user.userId });

    await Comments.create({
      body: commentMessage,
      post: postID,
      createdByUsername: user.username,
      createdBy: user._id,
    });
    res.status(200).json({ msg: 'comment added' });
  }
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

const getUserComments = async (req, res) => {
  const { id } = req.params;
  const userID = req.user.userId;

  if (id !== userID) {
    throw Error('Issue verifying your account');
  }

  const userComments = await Comments.find({ createdBy: id });
  console.log('comments', userComments);

  res.status(200).json(userComments);
};

const getPostComments = async (req, res) => {
  const { id } = req.params;
  const postComments = await Comments.find({ post: id });

  res.status(200).json(postComments);
};

export {
  addComment,
  editComment,
  deleteComment,
  getAllComments,
  getUserComments,
  getPostComments,
};
