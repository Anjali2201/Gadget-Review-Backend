var express = require("express");
var router = express.Router();
const Post = require("../models/Post");

router.get("/", async function (req, res, next) {
  const { id } = req.params;
  const { email, comment } = req.body;
  let post;
  let totalcomments = 0;
  let allcomments = [];
  try {
    post = await Post.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!post) {
    return res.status(404).json({ message: "Couldnt Find Post By This ID" });
  }
  try {
    post.comments.push({ email, comment });
    await post.save();
    totalcomments = post.comments.length;
    allcomments = post.comments;
  } catch (err) {
    return console.log(err);
  }
  return res
    .status(200)
    .json({ message: "Comment Added", totalcomments, allcomments });
});
