import mongoose from "mongoose";
const {Schema, model} = mongoose;

const FavouriteSchema = new Schema({
    name: String,
    surname: String,
    username: {type: String, required: true, index: { unique: true }},
    city: String,
    email: String,
    password: String,
}, {timestamps: true});

export default model('Favourite', FavouriteSchema);