const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String, 
        required: true,
        min: 6
    },
    repassword:{
        type: String, 
        require: true, 
        min: 6,
    },
    createAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', signUpTemplate)