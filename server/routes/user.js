const express = require('express');

const router = express.Router();

// Controller functions
const { signupUser, loginUser } = require('../controllers/userControler'); // Use require instead of import

// Login route
router.post('/login', loginUser);

// Signup route
router.post('/signup', signupUser);

module.exports = router; // Use module.exports instead of export default
