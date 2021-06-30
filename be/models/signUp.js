const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String, 
        required: true,
        min: 6
    }
})

module.exports = mongoose.model('User', signUpTemplate)