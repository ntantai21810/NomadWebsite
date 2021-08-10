const { json, Router } = require("express");
const express = require("express");
require("dotenv").config();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const route = express.Router();

const User = require("../models/signUp");

route.post("/register", async (req, res) => {
  const { email, password, repassword } = req.body;

  // Khong nhap email or password or repassword
  if (!email || !password || !repassword) {
    return res.status(400).json({
      success: false,
      message: "Missing username or password or repassword",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Username existed" });
    if (password != repassword) {
      return res
        .status(400)
        .json({ success: false, message: "Password is not equal RePassword" });
    }
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
});

route.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing email or password" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    }
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    }
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({ success: true, message: "User logged in successfully" });
  } catch (err) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
});

module.exports = route;
