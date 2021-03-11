const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// Login
router.post('/', 
    authController.authUser
);

// get auth user
router.get('/',
    auth,
    authController.userAuth
);
module.exports = router;