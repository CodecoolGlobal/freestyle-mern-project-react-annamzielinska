import mongoose from "mongoose";
const {Schema, model} = mongoose;
// import validator from "validator";

const UserLoginSchema = new Schema({
    username: {type: String, required: true, index: { unique: true }},
    password: String,
}, {timestamps: true});

//static signup method
UserLoginSchema.statics.signup = async function(username, password) {
    //validation
    if(!username || !password){
        throw Error('All fields must be filed');
    }
    // if(!validator.isStrongPassword(password)){
    //     throw Error('Password not strong enough')
    // }

    const exists = await this.findOne ({username})
    if(exists) {
        throw Error('user already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ username, password: hash})

    return user
}


//static login method
UserLoginSchema.statics.signup = async function(username, password) {
    if(!username || !password){
        throw Error('All fields must be filed');
    }
    const user = await this.findOne ({username})
    if(!user) {
        throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('Incorrect password')
    }
    return user
}


export default model('User', UserLoginSchema);
