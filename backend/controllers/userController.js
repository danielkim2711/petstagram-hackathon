// @Desc    Register new user
// @Route   POST /api/users
// @Access  Public
const registerUser = (req, res) => {
  res.json({ message: 'Register User' });
};

// @Desc    Authenticate user
// @Route   POST /api/users/login
// @Access  Public
const loginUser = (req, res) => {
  res.json({ message: 'Login User' });
};

// @Desc    Get logged in user
// @Route   GET /api/users/me
// @Access  Private
const getMe = (req, res) => {
  res.json({ message: 'Get User' });
};

module.exports = { registerUser, loginUser, getMe };
