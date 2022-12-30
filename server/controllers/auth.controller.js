const registerUser = (req, res) => {
  res.status(200).json({ msg: 'registerUser' });
};

const loginUser = (req, res) => {
  res.status(200).json({ msg: 'loginUser' });
};

const deleteUser = (req, res) => {
  res.status(200).json({ msg: 'deleteUser' });
};

export { registerUser, loginUser, deleteUser };
