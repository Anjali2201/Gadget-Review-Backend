const mongoose = require("mongoose");
require("mongoose-type-email");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  authoremail: {
    type: String,
    required: true,
  },
  authorname: {
    type: String,
    required: true,
  },
  gadgetname: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  likedUser: {
    type: Array,
  },
  comments: {
    type: Array,
    comment: {
      type: String,
      required: true,
    },
    commenter: {
      type: String,
      required: true,
    },
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
