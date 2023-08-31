import requireAuth from '../middleware/requireAuth.js';
const express = require('express');
const Favourite = require('../models/favourites.js');

const favRouter = express.Router();

//require auth for all favourites routes
favRouter.use(requireAuth)

favRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const favList = await Favourite.find();
      res.status(200).json(favList);
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'An error occurred while retrieving data.' });
    }
  })
  .post(async (req, res) => {
    const { drinkId, name, photoUrl, instructions } = req.body;
    try {
      const favourite = await Favourite.create({drinkId, name, photoUrl, instructions });
      res.status(200).json(favourite);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

favRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const id = req.params.id;
      const findOneFav = await Favourite.findOne({ _id: id });

      if (!findOneFav) {
        return res.status(404).json({ error: 'Favorite drink not found.' });
      }
      res.status(200).json(findOneFav);
    } catch (error) {
      console.error('Error searching favorite drink:', error);
      res.status(500).json({ error: 'An error occurred while getting the favorite drink.' });
    }
  })
  .delete(async (req, res) => {
    try {
      const id = req.params.id;
      const deletedFav = await Favourite.deleteOne({ _id: id });

      if (deletedFav.deletedCount === 0) {
        return res.status(404).json({ error: 'Favorite drink not found.' });
      }

      res.status(200).json({ message: 'Favorite drink deleted successfully.' });
    } catch (error) {
      console.error('Error deleting favorite drink:', error);
      res.status(500).json({ error: 'An error occurred while deleting the favorite drink.' });
    }
  });

module.exports = favRouter;
