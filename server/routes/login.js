import express from 'express';
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter
.route('/login')
.post(async (req, res) => {
    try {
        const username = req.body.username
        const data = await userModel.find({username: username});
        if (!data) {
          return res.status(404)
        } 
        if (data.password !== req.body.password) return res.status(402)
        res.status(200).json(data);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'An error occurred while retrieving data.' });
    }
  }); 

userRouter
.route('/register')
.get( async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'An error occurred while retrieving data.' });
    }
  }) 
.post(async (req, res) => {
    const { name, surname, username, password, city, email } = req.body;
    try {
        const user = await User.create({ name, surname, username, password, city, email })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

userRouter
.route('/register/:id')
.get(async (req,res)=> {
    try{
        const id = req.params.id
        const findOneUser = await User.findOne({_id: id});

    if (!findOneUser) {
        return res.status(404).json({error:'User not found.'});
    }
    res.status(200).json(findOneUser);
    }catch (error) {
        console.error('Error searching user:', error);
        res.status(500).json({ error: 'An error occurred while getting the user.' });
      }
})
.delete(async (req,res) => {
    try{
        const id = req.params.id
        const deletedUser = await User.deleteOne({ _id: id });

    if (deletedUser.deletedCount === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
})


  
export default userRouter