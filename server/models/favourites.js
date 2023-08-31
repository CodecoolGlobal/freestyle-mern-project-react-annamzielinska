const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const FavouriteSchema = new Schema({
    name: String,
    photoUrl: String,
    instructions: String,
}, { timestamps: true });

module.exports = mongoose.model('Favourite', FavouriteSchema);