const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: 'Register User' });
});
router.post('/login', (req, res) => {
  res.json({ message: 'Login User' });
});
router.get('/me', (req, res) => {
  res.json({ message: 'Get User' });
});

module.exports = router;
