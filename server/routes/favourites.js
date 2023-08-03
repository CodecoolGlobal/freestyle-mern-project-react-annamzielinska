import express from 'express';
import Favourite from "../models/favourites.js";

const router = express.Router();

router.get('/list', async (req, res) => {
    
})

router.post('/add', async (req, res) => {
    const { name, isAlcoholic, ingridients, instructions} = req.body;
    try {
        const favourite = await Favourite.create({ name, isAlcoholic, ingridients, instructions})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

export default router