const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const operationController = require('../controllers/operationController');

// Get all operations
router.get('/', 
    auth,
    operationController.getAllOperations
)

module.exports = router;