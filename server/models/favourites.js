import mongoose from "mongoose";
const {Schema, model} = mongoose;

const FavouriteSchema = new Schema({
    name: String,
    photoUrl: String,
    instructions: String,
}, {timestamps: true});

export default model('Favourite', FavouriteSchema);