const express = require('express');
const router = express.Router();
const { getCredits, adminStats } = require('../controllers/creditController');

// GET /api/credits/:email
router.get('/:email', getCredits);

// GET /api/admin/stats
router.get('/admin/stats', adminStats);

module.exports = router;
