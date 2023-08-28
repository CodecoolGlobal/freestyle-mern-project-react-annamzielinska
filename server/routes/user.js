import express from 'express';

const router = express.Router();

//controller functions
const { signupUser, loginUser } = require('../controlelers/userControler.js')

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)