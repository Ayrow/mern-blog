import User from '../models/User.js';

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw Error('All fields are required');
  }

  const usernameTaken = await User.findOne(username);
  if (usernameTaken) {
    throw Error('Username already taken');
  }

  const user = await User.create({ username, password });
  const token = await user.createJWT();

  res.status(200).json({ user: user.username, token });
};

const loginUser = async (req, res) => {
  console.log('req.body', req.body);
  res.status(200).json({ msg: 'loginUser' });
};

const updateUser = async (req, res) => {
  res.status(200).json({ msg: 'updateUser' });
};

const deleteUser = async (req, res) => {
  res.status(200).json({ msg: 'deleteUser' });
};

export { registerUser, loginUser, deleteUser, updateUser };
