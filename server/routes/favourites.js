import express from 'express';
import Favourite from "../models/favourites.js";

const favRouter = express.Router();

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
    const { name, photoUrl, instructions} = req.body;
    try {
        const favourite = await Favourite.create({ name, photoUrl, instructions})
        res.status(200).json(favourite)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

favRouter
.route('/:id')
.get(async (req,res)=> {
    try{
        const id = req.params.id
        const findOneFav = await User.findOne({_id: id});

    if (!findOneFav) {
        return res.status(404).json({error:'User not found.'});
    }
    res.status(200).json(findOneFav);
    }catch (error) {
        console.error('Error searching favourite drink:', error);
        res.status(500).json({ error: 'An error occurred while getting the favourite drink.' });
      }
})
.delete(async (req,res) => {
    try{
        const id = req.params.id
        const deletedFav = await Favourite.deleteOne({ _id: id });

    if (deletedFav.deletedCount === 0) {
      return res.status(404).json({ error: 'Favourite drink not found.' });
    }

    res.status(200).json({ message: 'Favourite drink deleted successfully.' });
  } catch (error) {
    console.error('Error deleting favourite drink:', error);
    res.status(500).json({ error: 'An error occurred while deleting the favourite drink.' });
  }
})

export default favRouter