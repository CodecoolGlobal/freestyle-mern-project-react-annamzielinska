const UserLoginModel = require("../models/UserLoginModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

//login user
const loginUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await UserLoginModel.login(username, password)

        const token = createToken(user._id)

        res.status(200).json({ username, token })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

//singup user
const signupUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await UserLoginModel.signup(username, password)

        const token = createToken(user._id)
        res.status(200).json({ username, token })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


module.exports = {
    signupUser,
    loginUser
};