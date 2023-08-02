import express from 'express';
import User from "../models/userModel.js";

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
})

router.post('/register', async (req, res) => {
    const { name, surname, username, password, city, email } = req.body;
    try {
        const user = await User.create({ name, surname, username, password, city, email })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

export default router