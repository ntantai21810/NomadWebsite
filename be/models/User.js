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
    username:{
        type: String,
        default: "",
    },
    favouriteRestaurant:{
        type: Array,
        default: [],
    },
    isOwnerRestaurant:{
        type: Boolean,
        default: false,
    },
    repassword:{
        type: String, 
        require: true, 
        min: 6,
    },
    avatar:{
        type:String,
        default: "",
    },
    restaurantID:{
        type: String,
        default: "",
    },
    createAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', signUpTemplate)