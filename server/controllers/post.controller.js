import BlogPost from '../models/BlogPost.js';
import User from '../models/User.js';

const addPost = async (req, res) => {
  const newBlogPost = req.body;

  const user = await User.findById(req.user.userId);
  if (!user || user.role !== 'admin') {
    throw Error('You need to be an admin to add a new post');
  } else {
    newBlogPost.createdBy = req.user.userId;
    await BlogPost.create(newBlogPost);
    res.status(200).json(newBlogPost);
  }
};

const getAllPosts = async (req, res) => {
  const posts = await BlogPost.find();
  res.status(200).json(posts);
};

const getSinglePost = async (req, res) => {
  const { id } = req.params;
  const post = await BlogPost.findOne({ _id: id });
  res.status(200).json({ post });
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  await BlogPost.deleteOne({ _id: id });
  res.status(200).json({ msg: 'delete Post' });
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const updatedBlogPost = req.body;

  await BlogPost.findOneAndUpdate({ _id: id }, updatedBlogPost);

  res.status(200).json({ msg: 'updated Post' });
};

export { getAllPosts, addPost, getSinglePost, deletePost, updatePost };
