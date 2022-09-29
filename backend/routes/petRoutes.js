const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

router.route('/').get(getPets).post(protect, createPet);
router
  .route('/:id')
  .get(getPet)
  .put(protect, updatePet)
  .delete(protect, deletePet);

module.exports = router;
