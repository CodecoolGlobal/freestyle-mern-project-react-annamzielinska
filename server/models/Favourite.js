import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: String,
    surname: String,
    city: String,
    password: String,
});

export default model('User', ToDoSchema);