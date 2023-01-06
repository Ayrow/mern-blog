import BlogPost from '../models/BlogPost.js';

const addPost = async (req, res) => {
  console.log('req.user.userId', req.user.userId);

  res.status(200).json({ msg: 'getAllPosts' });
  // const post = await BlogPost.create(req.body);

  // res.status(200).json(post);
};

const getAllPosts = async (req, res) => {
  res.status(200).json({ msg: 'getAllPosts' });
};

const commentPost = async (req, res) => {
  res.status(200).json({ msg: 'comment Post' });
};

const getSinglePost = async (req, res) => {
  res.status(200).json({ msg: 'get Single Post' });
};

const deletePost = async (req, res) => {
  res.status(200).json({ msg: 'delete Post' });
};

const updatePost = async (req, res) => {
  res.status(200).json({ msg: 'update Post' });
};

const savePost = async (req, res) => {
  res.status(200).json({ msg: 'save post' });
};

const getAllSavedPosts = async (req, res) => {
  res.status(200).json({ msg: 'get all saved posts' });
};

const deleteSavedPost = async (req, res) => {
  res.status(200).json({ msg: 'delete saved post' });
};

export {
  getAllPosts,
  addPost,
  commentPost,
  getSinglePost,
  deletePost,
  savePost,
  getAllSavedPosts,
  deleteSavedPost,
  updatePost,
};
