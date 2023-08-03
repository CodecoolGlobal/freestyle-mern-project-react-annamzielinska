import mongoose from "mongoose";
const {Schema, model} = mongoose;

const FavouriteSchema = new Schema({
    name: String,
    isAlcoholic: Boolean,
    ingridients: Array,
    instructions: String,
}, {timestamps: true});

export default model('Favourite', FavouriteSchema);