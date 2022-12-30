const registerUser = async (req, res) => {
  res.status(200).json({ msg: 'registerUser' });
};

const loginUser = async (req, res) => {
  res.status(200).json({ msg: 'loginUser' });
};

const updateUser = async (req, res) => {
  res.status(200).json({ msg: 'updateUser' });
};

const deleteUser = async (req, res) => {
  res.status(200).json({ msg: 'deleteUser' });
};

export { registerUser, loginUser, deleteUser, updateUser };
