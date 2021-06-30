const express = require('express')
const route = express.Router()

const signUpTemplate = require('../models/signUp')

route.post('/register', (req, res) => {
    const signUpUser = new signUpTemplate({
        email: req.body.email,
        password: req.body.password,
    })
    signUpUser.save()
    .then(data=>{
        res.json(data);
    })
    .catch(error=>{
        res.json(error);
    })
})

module.exports = route;
