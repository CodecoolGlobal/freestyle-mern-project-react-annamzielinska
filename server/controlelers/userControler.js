import UserLoginModel from "../models/UserLoginModel";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
    jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//login user
const loginUser = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await UserLoginModel.login(username, password)

        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

//singup user
const signupUser = async (req, res) => {
    const { username, password} = req.body
    try {
        const user = await UserLoginModel.signup(username, password)

        const token = createToken(user._id)
        res.status(200).json({email, token})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
    res.jes({mssg:"signup user"})
}


export default {signupUser, loginUser}