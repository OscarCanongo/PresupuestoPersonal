const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const operationController = require('../controllers/operationController');

// Get all operations
router.get('/', 
    auth,
    operationController.getAllOperations
)

// Get balance
router.get('/balance', 
    auth,
    operationController.getBalance 
)

module.exports = router;