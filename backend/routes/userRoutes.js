const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.route('/:id').put(protect, updateUser).delete(protect, deleteUser);
router.post('/login', loginUser);

module.exports = router;
