import User from '../models/User.js';

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw Error('All fields are required');
  }

  const usernameTaken = await User.findOne({ username });
  if (usernameTaken) {
    throw Error('Username already taken');
  }

  const user = await User.create({ username, password });
  const token = await user.createJWT();

  console.log('user', user);

  res.status(200).json({ user, token });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw Error('All fields are required');
  }

  const user = await User.findOne({ username }).select('+password');
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
  res.status(200).json({ msg: 'updateUser' });
};

const deleteUser = async (req, res) => {
  res.status(200).json({ msg: 'deleteUser' });
};

export { registerUser, loginUser, deleteUser, updateUser };
