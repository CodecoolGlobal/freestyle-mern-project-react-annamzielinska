import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserLoginSchema = new Schema({
    username: {type: String, required: true, index: { unique: true }},
    password: String,
}, {timestamps: true});

export default model('User', UserLoginSchema);
