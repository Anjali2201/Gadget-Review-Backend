var express = require("express");
var router = express.Router();
const Post = require("../models/Post");

router.get("/", async function (req, res, next) {
  const { email } = req.body;
  let posts;
  try {
    posts = await Post.find({ authoremail: email });
  } catch (err) {
    console.log(err);
  }
  if (!posts) {
    return res.status(404).json({ message: "No Posts Found" });
  }
  return res.status(200).json({ posts });
});

module.exports = router;
