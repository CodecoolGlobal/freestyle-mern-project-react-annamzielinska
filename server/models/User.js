import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: String,
    surname: String,
    username: {type: String, required: true, index: { unique: true }},
    city: String,
    email: String,
    password: String,
});

export default model('User', UserSchema);
