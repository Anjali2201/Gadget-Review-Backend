var express = require("express");
var router = express.Router();
const Post = require("../models/Post");

router.get("/", async function (req, res, next) {
  const { id } = req.params;
  const { email } = req.body;
  let post;
  try {
    post = await Post.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!post) {
    return res.status(404).json({ message: "Couldnt Find Post By This ID" });
  }
  try {
    if (post.likedUser.includes(email)) {
      post.likedUser.pop(email);
      await post.save();
      return res.status(200).json({ message: "Unliked" });
    }
    post.likedUser.push(email);
    await post.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ message: "Liked" });
});

module.exports = router;
