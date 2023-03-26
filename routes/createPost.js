var express = require("express");
var router = express.Router();
const Post = require("../models/Post");

router.post("/", async function (req, res, next) {
  const {
    authoremail,
    authorname,
    gadgetname,
    category,
    model,
    price,
    review,
    rate,
  } = req.body;
  const likedUser = [];
  const comments = [];
  const post = new Post({
    authoremail,
    authorname,
    gadgetname,
    category,
    model,
    price,
    review,
    rate,
    likedUser,
    comments,
  });
  try {
    await post.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ post });
});

module.exports = router;
