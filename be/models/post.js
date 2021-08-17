const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userID: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
    min: 0,
    max: 100,
    default: "",
  },
  avatar: {
    type: Array,
    default: [],
  },
  image: {
    type: Array,
    default: [],
  },
  descriptionRestaurant: {
    type: String,
    default: "",
  },
  descriptionFood: {
    type: String,
    default: "",
  },
  price: {
    type: Array,
    default: [],
  },
  likes: {
    type: Number,
    default: 0,
  },
  comment: {
    type: Array,
    default: [],
  },
  type: {
    type: String,
    default: "",
  },
  typeofFood: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  openTime: {
    type: String,
    default: "",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  member: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
});

module.exports = mongoose.model("Post", PostSchema);
