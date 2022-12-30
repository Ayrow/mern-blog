const addPost = async (req, res) => {
  res.status(200).json({ msg: 'addPost' });
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
