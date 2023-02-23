import User from '../models/User.js';
import Comments from '../models/Comments.js';
import BlogPost from '../models/BlogPost.js';

const registerUser = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    throw Error('All fields are required');
  }

  const usernameTaken = await User.findOne({ username });
  if (usernameTaken) {
    throw Error('Username already taken');
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  const token = await user.createJWT();

  res.status(200).json({ user, token });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw Error('All fields are required');
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw Error('Wrong credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw Error('Wrong credentials');
  }

  const token = await user.createJWT();
  user.password = undefined;

  res.status(200).json({ user: user, token });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { roleValue, username } = req.body;
  const userRequestingID = req.user.userId;

  const userRequesting = await User.findOne({ _id: userRequestingID });

  let user = await User.findOne({ _id: id });

  // updating user from admin
  if (userRequesting.role && userRequesting.role === 'admin') {
    user.username = username;
    user.role = roleValue;

    await user.save();
  }

  // user updates his/her info

  res.status(200).json({ msg: 'user updated' });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await Comments.updateMany(
    { createdBy: id },
    { $set: { createdByUsername: 'Deleted User' } }
  );

  await User.findOneAndDelete({ _id: id });

  res.status(200).json({ msg: 'deleteUser' });
};

const getAllUsers = async (req, res) => {
  const user = await User.findById(req.user.userId);
  if (!user || user.role !== 'admin') {
    throw Error('You cannot manage users');
  } else {
    const users = await User.find();
    res.status(200).json(users);
  }
};

const savePost = async (req, res) => {
  const { id } = req.body;

  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw Error('You need an account to save a post');
  }

  const post = await BlogPost.findOne({ _id: id });

  user.savedPosts.addToSet(post);
  await user.save();

  res.status(200).json({ user, post });
};

const getAllSavedPosts = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw Error('You need an account to see saved posts');
  }

  const savedPostsID = user.savedPosts;
  const posts = await BlogPost.find({ _id: savedPostsID });

  res.status(200).json({ savedPostsID, posts });
};

const deleteSavedPost = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ _id: req.user.userId });

  user.savedPosts.pull(id);

  await user.save();

  res.status(200).json(user);
};

export {
  registerUser,
  loginUser,
  deleteUser,
  updateUser,
  getAllUsers,
  savePost,
  getAllSavedPosts,
  deleteSavedPost,
};
