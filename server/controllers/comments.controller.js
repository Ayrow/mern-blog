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
    const post = await BlogPost.findOne({ _id: postID });

    await Comments.create({
      body: commentMessage,
      post: post._id,
      postTitle: post.title,
      createdByUsername: user.username,
      createdBy: user._id,
    });
    res.status(200).json({ msg: 'comment added' });
  }
};

const editComment = async (req, res) => {
  const { commentText } = req.body;
  const { id } = req.params;
  const { userId } = req.user;

  await Comments.updateOne({ _id: id }, { body: commentText });
  const userComments = await Comments.find({ createdBy: userId });

  res.status(200).json(userComments);
};

const deleteComment = async (req, res) => {
  const { id: commentID } = req.params;
  const userID = req.user.userId;

  await Comments.findOneAndDelete({ _id: commentID });
  const userComments = await Comments.find({ createdBy: userID });

  res.status(200).json(userComments);
};

const getAllComments = async (req, res) => {
  const { sort } = req.query;

  const queryObject = {};

  let result = Comments.find(queryObject);

  if (sort === 'oldest') {
    result = result.sort('createdAt');
  }

  if (sort === 'latest') {
    result = result.sort('-createdAt');
  }

  if (sort === 'a-z') {
    result = result.sort('postTitle');
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const allComments = await result;

  const totalComments = await Comments.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalComments / limit);

  res.status(200).json({ allComments, numOfPages, totalComments });
};

const getUserComments = async (req, res) => {
  const { id } = req.params;
  const { sort } = req.query;
  const queryObject = {};

  if (id !== req.userId) {
    throw Error('Issue verifying your account');
  }

  queryObject.createdBy = id;

  let result = Comments.find(queryObject);

  if (sort === 'oldest') {
    result = result.sort('createdAt');
  }

  if (sort === 'latest') {
    result = result.sort('-createdAt');
  }

  if (sort === 'a-z') {
    result = result.sort('postTitle');
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const allComments = await result;

  const totalComments = await Comments.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalComments / limit);

  res.status(200).json({ allComments, numOfPages, totalComments });
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
